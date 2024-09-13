"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import JobApplications from "./job-applications";
import { JobPost } from "@/app/types/job-post";

export default function AdminView() {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/jobs");
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to fetch jobs. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <AdminViewSkeleton />;
  }

  return (
    <div className="px-7">
      <Button onClick={fetchJobs} className="mb-4">
        Refresh Jobs
      </Button>
      <Accordion type="single" collapsible className="w-full">
        {jobs.map((job) => (
          <AccordionItem key={job.id} value={`job-${job.id}`}>
            <AccordionTrigger>{job.title}</AccordionTrigger>
            <AccordionContent>
              <JobApplications jobId={job.job_id} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function AdminViewSkeleton() {
  return (
    <div className="space-y-4 px-7">
      <Skeleton className="h-10 w-32" />
      {[...Array(3)].map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-3/4" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
