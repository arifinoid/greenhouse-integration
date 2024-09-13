"use client";

import { Suspense, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import JobDetails from "@/components/features/job-details";
import ApplicationForm from "@/components/features/application-form";
import { JobPost } from "@/app/types/job-post";
import { useToast } from "@/hooks/use-toast";

export default function ApplyPage({
  params,
}: {
  params: { jobPostId: string };
}) {
  const [job, setJob] = useState<JobPost>();
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchJobDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/jobs/${params.jobPostId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error:", error);
        toast({
          title: "Error",
          description: "Failed to fetch job details. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobDetails();
  }, [params.jobPostId, toast]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Application</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Suspense fallback={<JobDetailsSkeleton />}>
          <JobDetails job={job} isLoading={isLoading} />
        </Suspense>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Apply for this Position
          </h2>
          <Suspense fallback={<div>Loading application form...</div>}>
            <ApplicationForm jobPostId={params.jobPostId} jobId={job?.job_id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function JobDetailsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-24 w-full" />
    </div>
  );
}
