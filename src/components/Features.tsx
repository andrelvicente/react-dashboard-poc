const Features = () => {
    return (
      <section id="features" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Funcionalidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Funcionalidade 1</h3>
              <p className="text-gray-700">Descrição curta da funcionalidade número 1.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Funcionalidade 2</h3>
              <p className="text-gray-700">Descrição curta da funcionalidade número 2.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Funcionalidade 3</h3>
              <p className="text-gray-700">Descrição curta da funcionalidade número 3.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;