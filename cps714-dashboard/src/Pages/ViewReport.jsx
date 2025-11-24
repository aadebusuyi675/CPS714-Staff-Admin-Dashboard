import React, { useState, useEffect } from 'react';
import supabase from '../supabase-client';
import ReportCard from '../Components/ReportCard';
import '../Components/ViewMembers.css'; // reuse styling

const ViewReport = () => {
  const [totalMembers, setTotalMembers] = useState(0);
  const [totalStaff, setTotalStaff] = useState(0);
  const [totalClasses, setTotalClasses] = useState(0);
  const [totalCapacity, setTotalCapacity] = useState(0); // total seats across all classes
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        // Total members
        const { count: memberCount, error: memberError } = await supabase
          .from('members')
          .select('member_id', { count: 'exact' });
        if (memberError) throw memberError;
        setTotalMembers(memberCount);

        // Total staff
        const { count: staffCount, error: staffError } = await supabase
          .from('instructor')
          .select('instructor_id', { count: 'exact' });
        if (staffError) throw staffError;
        setTotalStaff(staffCount);

        // Total classes
        const { data: classesData, error: classError } = await supabase
          .from('classData')
          .select();
        if (classError) throw classError;
        setTotalClasses(classesData.length);

        // Total capacity
        const capacitySum = classesData.reduce((sum, c) => sum + Number(c.capacity), 0);
        setTotalCapacity(capacitySum);

      } catch (error) {
        console.log(error);
        setFetchError('Failed to fetch report data.');
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="main">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=content_paste" />
      <header className='title'> <span class="material-symbols-outlined icon-setting">content_paste</span> FitHub - Reports <span class="material-symbols-outlined icon-setting">content_paste</span> </header>
      {fetchError && <p>{fetchError}</p>}
      <div className="border2">
        <ReportCard title="Total Members" value={totalMembers} />
        <ReportCard title="Total Staff" value={totalStaff} />
        <ReportCard title="Total Classes" value={totalClasses} />
        <ReportCard title="Total Class Capacity" value={totalCapacity} />
      </div>
    </div>
  );
};

export default ViewReport;
