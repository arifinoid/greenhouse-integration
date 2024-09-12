import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JobPost } from "@/app/types/job-post";

export default function JobDetails({
  job,
  isLoading,
}: {
  job: JobPost | undefined;
  isLoading: boolean;
}) {
  if (isLoading) return <div>Loading job details...</div>;
  if (!job) return <div>Job details not found.</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>{job.location.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: job.content }}
        />
      </CardContent>
    </Card>
  );
}
