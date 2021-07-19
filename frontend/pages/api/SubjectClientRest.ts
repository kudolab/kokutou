import { APIHOST } from "../../env";
import type { DeeplyRequired } from "../../util/UtilType";
import { ISubjectClient } from "./Interface";
import { asJson } from "./Util";
import { paths } from "./Schema";

const basePath = "/v1" as const;
const fullPath = (_: TemplateStringsArray, joined: string) => `${APIHOST}${basePath}${joined}`;

const getSubjectsPath = "/subjects" as const;
const postSubjectPath = "/subjects" as const;
const getSubjectDetailPath = "/subjects/{subject_id}" as const;
const getSubjectDetailPathTemplate = (_: TemplateStringsArray, subject_id: number) =>
  `/subjects/${subject_id}`;

type getSubjectsResponse = paths[typeof getSubjectsPath]["get"]["responses"]["200"]["schema"];
type postSubjectRequest = paths[typeof postSubjectPath]["post"]["parameters"]["body"]["body"];
type postSubjectResponse = paths[typeof postSubjectPath]["post"]["responses"]["201"]["schema"];
type getSubjectDetailResponse =
  paths[typeof getSubjectDetailPath]["get"]["responses"]["200"]["schema"];

const getSubjects = async (): Promise<Array<Subject>> => {
  const json = await fetch(fullPath`${getSubjectsPath}`).then(
    asJson<DeeplyRequired<getSubjectsResponse>>(),
  );

  return json.subjects.map((v) => ({
    id: v.id,
    name: v.name,
    system_name: v.system_name,
  }));
};

const postSubject = async (subjectEntity: {
  name: string;
  system_name: string;
}): Promise<number> => {
  const requestBody: postSubjectRequest = {
    name: subjectEntity.name,
    system_name: subjectEntity.system_name,
  };

  const json = await fetch(fullPath`${postSubjectPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${Auth.sessionToken()}`,
    },
    body: JSON.stringify(requestBody),
  }).then(asJson<DeeplyRequired<postSubjectResponse>>());

  // TODO エラー判定実装？？ エラーページないから後回し

  return json.id;
};

const getSubjectDetail = async (subjectId: number): Promise<Subject> => {
  const json = await fetch(fullPath`${getSubjectDetailPathTemplate`${subjectId}`}`).then(
    asJson<DeeplyRequired<getSubjectDetailResponse>>(),
  );

  return {
    id: json.id,
    name: json.name,
    system_name: json.system_name,
  };
};

export const apiSubjectClient: ISubjectClient = {
  getSubjects: getSubjects,
  postSubject: postSubject,
  getSubjectDetail: getSubjectDetail,
};
