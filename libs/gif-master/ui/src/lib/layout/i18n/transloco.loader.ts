// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loader = ['en', 'vi'].reduce((acc: any, lang: string) => {
  acc[lang] = () => import(`./${lang}.json`);
  return acc;
}, {});
