import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FilterInterface } from '../interfaces/filter.interface';
import './job_feed.css';

const JobFeed: React.FC = () => {

  const [ searchParams, setSearchParams ] = useSearchParams();

  const FILTER_REF = useRef<HTMLElement>(null);
  const PAGINATION_REF_1 = useRef<HTMLElement>(null);
  const PAGINATION_REF_2 = useRef<HTMLElement>(null);

  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [type, setType] = useState(searchParams.get('type') || '');
  const [limit, setLimit] = useState(searchParams.get('limit') || 10);
  const [page, setPage] = useState(searchParams.get('page') || 1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const { data:response, isLoading, error } = useQuery({
    queryKey: [category,type,limit,page],
    queryFn: () => fetch(`/api/jobs?limit=${limit}&page=${page}&category=${category}&type=${type}`).then(res => res.json()),
    refetchInterval: 30000
  });

  useEffect(() => {
    if(response?.meta) {
      setTotal(response.meta.total);
      setTotalPages(response.meta.totalPages);
    }
  }, [response]);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  }, [category, setSearchParams]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (type) {
      params.set('type', type);
    } else {
      params.delete('type');
    }
    setSearchParams(params);
  }, [type, setSearchParams]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (limit) {
      params.set('limit', limit);
    } else {
      params.delete('limit');
    }
    setSearchParams(params);
  }, [limit, setSearchParams]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (limit) {
      params.set('page', page);
    } else {
      params.delete('page');
    }
    setSearchParams(params);
  }, [page, setSearchParams]);

  useEffect(() => {
    const FR = FILTER_REF.current;

    const handleFilter = (event: Event) => {
      const { filterGroup, selection } = event.detail;
      if(filterGroup==='Category') {
        setCategory(String(selection));
        setPage(Number(1));
        setLimit(Number(10));
      }
      if(filterGroup==='Type') {
        setType(String(selection));
        setPage(Number(1));
        setLimit(Number(10));
      }
    
    }

    FR?.addEventListener('doFilter', handleFilter);


    return () => FR?.removeEventListener('doFilter', handleFilter);

  },[]);

  useEffect(() => {
    const PR1 = PAGINATION_REF_1.current;

    const handleChangeNumOfItems = (event: Event) => {
      const { numOfItems } = event.detail;
      setLimit(Number(numOfItems));
      setPage(Number(1));
    }

    const handleChangePage = (event: Event) => {
      const { amount } = event.detail;
      setPage(amount);
    }

    PR1?.addEventListener('doChangeLimit', handleChangeNumOfItems);
    PR1?.addEventListener('doChangePage', handleChangePage);

    return () => { 
      PR1?.removeEventListener('doChangeLimit', handleChangeNumOfItems);
      PR1?.removeEventListener('doChangePage', handleChangePage);
    }
  },[]);

  useEffect(() => {
    const PR2 = PAGINATION_REF_2.current;

    const handleChangeNumOfItems = (event: Event) => {
      const { numOfItems } = event.detail;
      setLimit(Number(numOfItems));
      setPage(Number(1));
    }

    const handleChangePage = (event: Event) => {
      const { amount } = event.detail;
      setPage(amount);
    }

    PR2?.addEventListener('doChangeLimit', handleChangeNumOfItems);
    PR2?.addEventListener('doChangePage', handleChangePage);

    return () => { 
      PR2?.removeEventListener('doChangeLimit', handleChangeNumOfItems);
      PR2?.removeEventListener('doChangePage', handleChangePage);
    }
  },[]);



  const FILTERS:FilterInterface[] = [
    {
      title: "Category",
      items: [
        "Engineering",
        "Marketing",
        "Design",
        "Sales",
        "IT"
      ]
    },
    {
      title: "Type",
      items: [
        "Full-time",
        "Part-time",
        "Contract",
        "Freelance"
      ]
    }
  ];
  

  return (
    <>
      <div className="h-full flex flex-col md:flex-row">
        <app-filter title="Jobs Filter" filters={JSON.stringify(FILTERS)} ref={FILTER_REF} className="w-full md:w-1/6"></app-filter>
        <div className="job-feed-container overflow-y-auto w-full md:flex-1">
          <div className="flex flex-col">
            <app-pagination total={total} totalpages={totalPages} page={page} limit={limit} ref={PAGINATION_REF_1} className="pagination w-full"></app-pagination>
            <app-job-feed-table data={JSON.stringify(response?.data || [])} errormessage={error?.message || ''} isloading={isLoading} className="job-feed w-full"></app-job-feed-table>
            <app-pagination total={total} totalpages={totalPages} page={page} limit={limit}  ref={PAGINATION_REF_2} className="pagination w-full"></app-pagination>
          </div>
        </div>
      </div>
    </>
  )

};

export default JobFeed;
