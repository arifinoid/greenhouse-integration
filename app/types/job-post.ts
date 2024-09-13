export interface JobPost {
  id: number;
  active: boolean;
  live: boolean;
  first_published_at: Date | null;
  title: string;
  location: Location;
  internal: boolean;
  external: boolean;
  job_id: number;
  content: string;
  internal_content: null;
  updated_at: Date;
  created_at: Date;
  demographic_question_set_id: null;
  questions: Question[];
}

export interface Location {
  id: number;
  name: LocationName;
  office_id: null;
  job_post_custom_location_id: null;
  job_post_location_type: JobPostLocationType;
}

export interface JobPostLocationType {
  id: number;
  name: JobPostLocationTypeName;
}

export enum JobPostLocationTypeName {
  FreeText = "Free Text",
}

export enum LocationName {
  Philippines = "Philippines",
  SANFrancisco = "San Francisco",
  Sydney = "Sydney",
}

export interface Question {
  required: boolean | null;
  private: boolean;
  label: string;
  name: string;
  type: Type;
  values: unknown[];
  description: null | string;
}

export enum Type {
  Attachment = "attachment",
  LongText = "long_text",
  ShortText = "short_text",
}
