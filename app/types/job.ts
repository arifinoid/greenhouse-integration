export interface Job {
  id: number;
  name: string;
  requisition_id: string;
  notes: null;
  confidential: boolean;
  is_template: null;
  copied_from_id: null;
  status: string;
  created_at: Date;
  opened_at: Date;
  closed_at: null;
  updated_at: Date;
  departments: Department[];
  offices: Office[];
  hiring_team: HiringTeam;
  openings: Opening[];
  custom_fields: CustomFields;
  keyed_custom_fields: KeyedCustomFields;
}

export interface CustomFields {
  employment_type: string;
  salary_range: ValueClass;
}

export interface ValueClass {
  min_value: string;
  max_value: string;
  unit: string;
}

export interface Department {
  id: number;
  name: string;
  parent_id: null;
  parent_department_external_id: null;
  child_ids: unknown[];
  child_department_external_ids: unknown[];
  external_id: null;
}

export interface HiringTeam {
  hiring_managers: unknown[];
  recruiters: unknown[];
  coordinators: unknown[];
  sourcers: unknown[];
}

export interface KeyedCustomFields {
  employment_type: EmploymentType;
  salary_range: KeyedCustomFieldsSalaryRange;
}

export interface EmploymentType {
  name: string;
  type: string;
  value: string;
}

export interface KeyedCustomFieldsSalaryRange {
  name: string;
  type: string;
  value: ValueClass;
}

export interface Office {
  id: number;
  name: string;
  location: Location;
  primary_contact_user_id: null;
  parent_id: null;
  parent_office_external_id: null;
  child_ids: unknown[];
  child_office_external_ids: unknown[];
  external_id: null;
}

export interface Location {
  name: null;
}

export interface Opening {
  id: number;
  opening_id: null | string;
  status: string;
  opened_at: Date;
  closed_at: Date | null;
  application_id: number | null;
  close_reason: CloseReason | null;
}

export interface CloseReason {
  id: number;
  name: string;
}
