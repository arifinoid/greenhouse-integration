"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Application } from "@/app/types/application";
import { Candidate } from "@/app/types/candidate";

export default function JobApplications({ jobId }: { jobId: number }) {
  const [applications, setApplications] = useState<Application[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchApplicationsAndCandidates();
  }, [jobId]);

  const fetchApplicationsAndCandidates = async () => {
    setIsLoading(true);
    try {
      const fetchApps = await fetch(`/api/get-applications?job_id=${jobId}`);
      const fetchCandidates = await fetch(`/api/candidates?job_id=${jobId}`);

      const [applicationsData, candidatesData] = await Promise.all([
        fetchApps,
        fetchCandidates,
      ]);
      const [applications, candidates] = await Promise.all([
        applicationsData.json(),
        candidatesData.json(),
      ]);

      setApplications(applications);
      setCandidates(candidates);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to fetch applications. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <JobApplicationsSkeleton />;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Stage</TableHead>
          <TableHead>Applied At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app) => {
          const candidate = candidates.find((c) => c.id === app.candidate_id);
          return (
            <TableRow key={app.id}>
              <TableCell>
                {candidate?.first_name
                  ? `${candidate?.first_name} ${candidate?.last_name}`
                  : "-"}
              </TableCell>
              <TableCell>
                {candidate?.email_addresses?.[0]?.value || "-"}
              </TableCell>
              <TableCell>{app.status}</TableCell>
              <TableCell>{app.current_stage?.name}</TableCell>
              <TableCell>
                {new Date(app.applied_at).toLocaleDateString()}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

function JobApplicationsSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-10 w-full" />
      {[...Array(5)].map((_, index) => (
        <Skeleton key={index} className="h-8 w-full" />
      ))}
    </div>
  );
}
