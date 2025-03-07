const Hero = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Bem-vindo ao nosso Projeto!</h2>
        <p className="text-lg md:text-xl mb-6">Nós trazemos soluções inovadoras para o seu negócio.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Criar Conta
        </button>
      </div>
    </section>
  );
};

export default Hero;
