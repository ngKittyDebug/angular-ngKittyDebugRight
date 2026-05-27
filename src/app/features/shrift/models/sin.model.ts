export interface Sin {
  id: number;
  text: string;
  severity: Severity;
  status: Status;
}

export type Severity = 'critical' | 'medium' | 'low';
export type Status = 'none' | 'half' | 'full';
