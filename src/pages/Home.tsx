import React from 'react';
import PageLayout from '../layouts/PageLayout'
import JobListing from '../components/JobListing'
import { IJob } from '../types'
import { useFetchJobs } from '../api/useFetch'

const Home = () => {
  const result = useFetchJobs()
  console.log('result', result?.data?.jobs);

  const { data, isLoading, hasError, errorMessage } = result
  const jobs = data?.jobs

  return <PageLayout>
    {
      jobs
        ? jobs.map((job: IJob) => <JobListing job={job} key={job.id} />)
        : isLoading
          ? 'Loading job listings'
          : 'No jobs found'
      //
    }
  </PageLayout>
}

export default Home
