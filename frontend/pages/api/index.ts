import { ISubjectClient } from "./Interface";
import { apiSubjectClient } from "./SubjectClientRest";

export const subjectClient: ISubjectClient = {
  getSubjects: apiSubjectClient.getSubjects,
  postSubject: apiSubjectClient.postSubject,
  getSubjectDetail: apiSubjectClient.getSubjectDetail,
};
