import ComingSoon from '@/app/components/ComingSoon';

const MuyProntoPage = () => {
  return (
    <ComingSoon
      title='Detalle del producto'
      message='Pronto podrás ver toda la información de cada producto.'
      backHref='/catalogo'
      backLabel='Volver al catálogo'
    />
  );
};

export default MuyProntoPage;
