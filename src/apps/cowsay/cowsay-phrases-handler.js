import { get } from '../../server/fake-api';

export default async function(req, res) {
  let phrases = await get('cowsayPhrases');
  res.send(phrases);
}
