import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parseFrontmatter } from './shared/koans/parse-frontmatter';
import { getAllKoanFiles, getKoansDirectory } from './shared/koans/utilities';

const koansList = async (): Promise<Response> => {
  const koansDirectory = getKoansDirectory();
  const files = await getAllKoanFiles();

  const list = await Promise.all(
    files.map((file) =>
      readFile(join(koansDirectory, file), 'utf-8').then((raw) => {
        const {
          frontmatter: { number, title, slug },
        } = parseFrontmatter(raw);

        return { number, title, slug };
      })
    )
  );

  const sortedList = list.toSorted((a, b) => a.number - b.number);

  return Response.json(sortedList);
};

export default koansList;
