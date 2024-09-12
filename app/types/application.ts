export interface Application {
  answers: any[];
  applied_at: Date;
  attachments: any[];
  candidate_id: number;
  credited_to?: null;
  current_stage: CurrentStage;
  id: number;
  job_post_id?: null;
  jobs: CurrentStage[];
  last_activity_at: Date;
  location?: null;
  prospect: boolean;
  prospect_detail?: ProspectDetail;
  prospective_department?: null;
  prospective_office?: null;
  rejected_at: Date;
  rejection_details: RejectionDetails;
  rejection_reason: RejectionReason;
  source: Source;
  status: string;
}

export interface CurrentStage {
  id: number;
  name: string;
}

export interface ProspectDetail {
  prospect_pool?: null;
  prospect_stage?: null;
  prospect_owner?: null;
}

export interface RejectionDetails {}

export interface RejectionReason {
  id: number;
  name: string;
  type: CurrentStage;
}

export interface Source {
  id: number;
  public_name: string;
}
