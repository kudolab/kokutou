// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<Subject>>) {
    res.status(200).json(
        [
            {
                id: 1,
                name: "瀧澤哲",
                system_name: "TAKI"
            },
            {
                id: 2,
                name: "さとうそら",
                system_name: "SATO"
            }
        ]
    )
}
