export interface ISubjectClient {
  getSubjects: () => Promise<Array<Subject>>;
  postSubject: (subjectEntity: {
    name: string;
    system_name: string;
  }) => Promise<number>;
  getSubjectDetail: (SubjectId: number) => Promise<Subject>;
}
