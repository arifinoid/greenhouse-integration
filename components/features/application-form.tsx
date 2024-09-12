"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ApplicationFormProps {
  jobId: number | undefined;
  jobPostId: string;
}

const defaultState = {
  firstName: "",
  lastName: "",
  email: "",
};

export default function ApplicationForm({
  jobId,
  jobPostId,
}: ApplicationFormProps) {
  const [formData, setFormData] = useState(defaultState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-application", {
        method: "POST",
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          job_id: jobId,
          job_post_id: jobPostId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      const data = await response.json();
      const duration = 2000; // 2 seconds

      if (data?.id) {
        toast({
          title: "Application Submitted",
          description: "Your application has been successfully submitted.",
          duration,
        });

        setTimeout(() => {
          router.push("/thank");
          setFormData(defaultState);
        }, duration);
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description:
          "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
