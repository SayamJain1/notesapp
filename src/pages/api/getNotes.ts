import data from '../../../db/data.json'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function getNotes(req: NextApiRequest,
    res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(data)
    }
    if (req.method === 'POST') {
        const bodyData = req.body;

        const response = await fetch('http://localhost:3002/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData)
        })

        if (response.ok) {
            const result = await response.json()
            res.status(200).json({ message: 'Data posted successfully', data: result })
        } else {
            res.status(response.status).json({ message: 'Failed to post data to server' });
        }
    }
}