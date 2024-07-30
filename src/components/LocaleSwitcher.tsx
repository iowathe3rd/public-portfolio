'use client';

import { useRouter } from 'next/router';

const LocaleSwitcher = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const changeLocale = (newLocale: string) => {
    // Смена локали и сохранение всех параметров маршрута
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div>
      <button onClick={() => changeLocale('en')}>EN</button>
      <button onClick={() => changeLocale('fr')}>FR</button>
      <button onClick={() => changeLocale('es')}>ES</button>
    </div>
  );
};

export default LocaleSwitcher;
