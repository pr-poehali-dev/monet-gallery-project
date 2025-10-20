import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const artworks = [
    {
      id: 1,
      title: 'Кувшинки',
      year: '1916-1919',
      description: 'Серия картин с водяными лилиями из сада в Живерни. Моне посвятил этой теме последние 30 лет жизни.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg'
    },
    {
      id: 2,
      title: 'Впечатление. Восход солнца',
      year: '1872',
      description: 'Картина, давшая название импрессионизму. Изображает гавань Гавра в утреннем тумане.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/1280px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg'
    },
    {
      id: 3,
      title: 'Пруд с кувшинками',
      year: '1899',
      description: 'Японский мостик в саду Моне. Художник создал более 250 картин с изображением этого пруда.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Water-Lilies-and-Japanese-Bridge-%281897-1899%29-Monet.jpg/1280px-Water-Lilies-and-Japanese-Bridge-%281897-1899%29-Monet.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">Клод Моне</Link>
          <div className="flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Биография</Link>
            <Link to="/impressionism" className="text-foreground hover:text-primary transition-colors">Импрессионизм</Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">Галерея</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-8 text-center">Галерея работ</h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Избранные картины Клода Моне
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {artworks.map((artwork) => (
                <div 
                  key={artwork.id}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedImage(artwork.image)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{artwork.title}</h3>
                    <p className="text-primary font-medium mb-3">{artwork.year}</p>
                    <p className="text-muted-foreground leading-relaxed">{artwork.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <section className="bg-card p-8 rounded-lg shadow-sm mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Paintbrush" size={28} className="text-primary" />
                <h2 className="text-3xl font-semibold">О творчестве</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  За свою долгую жизнь Клод Моне создал около 2500 картин. Большинство из них — 
                  это пейзажи и натюрморты, выполненные в импрессионистской манере.
                </p>
                <p>
                  Моне часто работал сериями, изображая один и тот же мотив в разное время суток 
                  и при различном освещении. Известные серии: «Стога сена», «Руанский собор», 
                  «Тополя», и, конечно, «Кувшинки».
                </p>
                <p>
                  В последние годы жизни, несмотря на ухудшающееся зрение из-за катаракты, 
                  Моне продолжал работать. Его поздние работы становились все более абстрактными 
                  и предвосхитили абстрактный экспрессионизм XX века.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-primary/10 to-secondary/30 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="MapPin" size={28} className="text-primary" />
                <h2 className="text-3xl font-semibold">Где увидеть работы Моне</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Музей Оранжери, Париж</h3>
                  <p className="text-muted-foreground">
                    Восемь монументальных панно «Кувшинки», созданных специально для этого музея
                  </p>
                </div>
                <div className="bg-white/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Музей Мармоттан-Моне, Париж</h3>
                  <p className="text-muted-foreground">
                    Крупнейшая коллекция работ Моне, включая «Впечатление. Восход солнца»
                  </p>
                </div>
                <div className="bg-white/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Музей Орсе, Париж</h3>
                  <p className="text-muted-foreground">
                    Обширная коллекция импрессионистов, включая ключевые работы Моне
                  </p>
                </div>
                <div className="bg-white/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Дом Моне, Живерни</h3>
                  <p className="text-muted-foreground">
                    Сад и дом художника, ставшие музеем и источником вдохновения
                  </p>
                </div>
              </div>
            </section>

            <div className="mt-16 flex justify-center gap-6">
              <Link 
                to="/"
                className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg hover:bg-secondary/80 transition-colors text-lg font-semibold"
              >
                <Icon name="ArrowLeft" size={20} />
                Биография
              </Link>
              <Link 
                to="/impressionism"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                Импрессионизм
              </Link>
            </div>
          </div>
        </div>
      </main>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Увеличенное изображение"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>Виртуальная галерея Клода Моне</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;