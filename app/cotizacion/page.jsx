import ComingSoon from '@/app/components/ComingSoon';

const CotizacionPage = () => {
  return (
    <ComingSoon
      title='Lista de cotización'
      message='Pronto podrás armar tu lista de materiales y pedir tu cotización sin llamar.'
      backHref='/catalogo'
      backLabel='Ver catálogo'
    />
  );
};

export default CotizacionPage;
