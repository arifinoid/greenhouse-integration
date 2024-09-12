export interface Candidate {
  id: number;
  first_name: string;
  last_name: string;
  company: null | string;
  title: null | string;
  created_at: Date;
  updated_at: Date;
  last_activity: Date;
  is_private: boolean;
  photo_url: null;
  attachments?: Attachment[];
  application_ids: number[];
  phone_numbers: Address[];
  addresses: Address[];
  email_addresses: Address[];
  website_addresses: Address[];
  social_media_addresses: SocialMediaAddress[];
  recruiter: Recruiter | null;
  coordinator: null;
  can_email: boolean;
  tags: Tag[];
  applications: Application[];
  educations: any[];
  employments: any[];
  linked_user_ids: any[];
}

export interface Address {
  value: string;
  type: AddressType;
}

export enum AddressType {
  Blog = "blog",
  Home = "home",
  Mobile = "mobile",
  Personal = "personal",
}

export interface Application {
  id: number;
  candidate_id: number;
  prospect: boolean;
  applied_at: Date;
  rejected_at: Date | null;
  last_activity_at: Date;
  location: null;
  attachments?: Attachment[];
  source: Source | null;
  credited_to: null;
  rejection_reason: RejectionReason | null;
  rejection_details: RejectionDetails | null;
  jobs: CurrentStage[];
  job_post_id: null;
  status: Status;
  current_stage: CurrentStage;
  answers: any[];
  prospective_department: null;
  prospective_office: null;
  prospect_detail: ProspectDetail;
}

export interface Attachment {
  filename: string;
  url: string;
  type: AttachmentType;
  created_at: Date;
}

export enum AttachmentType {
  Resume = "resume",
}

export interface CurrentStage {
  id: number;
  name: Name;
}

export enum Name {
  ApplicationReview = "Application Review",
  DeepDive = "Deep dive",
  FaceToFace = "Face to Face",
  FoundingCustomerSuccessLead = "Founding Customer Success Lead",
  FoundingFullStackEngineer = "Founding Full Stack Engineer",
  IntroCall = "Intro Call",
  NoneSpecified = "None specified",
  Offer = "Offer",
  PhoneInterview = "Phone Interview",
  PreliminaryPhoneScreen = "Preliminary Phone Screen",
  ReferenceCheck = "Reference Check",
  SampleJob2 = "Sample Job 2",
  SampleJob3 = "Sample Job 3",
  SampleJob4 = "Sample Job 4",
  TrialPeriod = "Trial Period",
}

export interface ProspectDetail {
  prospect_pool: null;
  prospect_stage: null;
  prospect_owner: null;
}

export interface RejectionDetails {}

export interface RejectionReason {
  id: number;
  name: Name;
  type: CurrentStage;
}

export interface Source {
  id: number;
  public_name: string;
}

export enum Status {
  Active = "active",
  Rejected = "rejected",
}

export interface Recruiter {
  id: number;
  first_name: string;
  last_name: string;
  name: string;
  employee_id: null;
}

export interface SocialMediaAddress {
  value: string;
}

export enum Tag {
  TestData = "Test Data",
}
