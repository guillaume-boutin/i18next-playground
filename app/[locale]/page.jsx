import ExampleClientComponent from '@/components/ExampleClientComponent';
import TranslationsProvider from '../../components/TranslationProvider';
import initTranslations from '../i18n';

export default async function Home({ params: { locale }}) {
  const i18nNamespaces = ["home"]

  const { t, resources } = await initTranslations(locale, ['home']);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <h1>{t("greeting")}</h1>
        <ExampleClientComponent />
      </main>
    </TranslationsProvider>
  );
}