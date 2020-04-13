import { get } from '../../server/fake-api';

export default async function(req, res) {
  let { letter } = req.params;
  let math = await get('math');
  res.send(math[letter]);
}
