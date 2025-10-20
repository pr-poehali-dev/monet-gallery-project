import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Biography = () => {
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
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-8 text-center">Клод Моне</h1>
            <p className="text-xl text-muted-foreground text-center mb-16">1840 - 1926</p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/800px-Claude_Monet_1899_Nadar_crop.jpg" 
                alt="Портрет Клода Моне" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="space-y-6">
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h2 className="text-3xl font-semibold mb-4">Основатель импрессионизма</h2>
                  <p className="text-lg leading-relaxed">
                    Клод Моне — французский живописец, один из основателей импрессионизма. 
                    Его работа «Впечатление. Восход солнца» дала название всему художественному движению.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <section className="bg-card p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Calendar" size={28} className="text-primary" />
                  <h2 className="text-3xl font-semibold">Ранние годы</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Оскар-Клод Моне родился 14 ноября 1840 года в Париже. В пять лет его семья переехала 
                  в Гавр на северном побережье Франции. Именно там юный Моне начал рисовать карикатуры 
                  и пейзажи.
                </p>
                <p className="text-lg leading-relaxed">
                  В 1859 году Моне отправился в Париж изучать искусство. Он посещал частную академию 
                  и знакомился с художниками, которые впоследствии станут его коллегами по импрессионизму.
                </p>
              </section>

              <section className="bg-card p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Palette" size={28} className="text-primary" />
                  <h2 className="text-3xl font-semibold">Творческий путь</h2>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2">1860-е годы</h3>
                    <p className="text-lg leading-relaxed">
                      Моне начинает работать на пленэре (на открытом воздухе), стремясь запечатлеть 
                      изменчивость света и атмосферы. Этот подход станет ключевым для импрессионизма.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2">1870-е годы</h3>
                    <p className="text-lg leading-relaxed">
                      Первая выставка импрессионистов в 1874 году. Картина «Впечатление. Восход солнца» 
                      вызывает критику, но дает название новому направлению в искусстве.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2">1883-1926 годы</h3>
                    <p className="text-lg leading-relaxed">
                      Моне переезжает в Живерни, где создает свой знаменитый сад с прудом. 
                      Серия «Кувшинки» становится вершиной его творчества и занимает последние 30 лет жизни.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-card p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Sparkles" size={28} className="text-primary" />
                  <h2 className="text-3xl font-semibold">Наследие</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Клод Моне скончался 5 декабря 1926 года в возрасте 86 лет в Живерни. 
                  Его работы повлияли на развитие современного искусства и вдохновили поколения художников.
                </p>
                <p className="text-lg leading-relaxed">
                  Сегодня картины Моне украшают крупнейшие музеи мира, а его дом в Живерни стал 
                  музеем, привлекающим тысячи посетителей ежегодно.
                </p>
              </section>
            </div>

            <div className="mt-16 flex justify-center gap-6">
              <Link 
                to="/impressionism"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                Стиль импрессионизма
                <Icon name="ArrowRight" size={20} />
              </Link>
              <Link 
                to="/gallery"
                className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg hover:bg-secondary/80 transition-colors text-lg font-semibold"
              >
                Галерея работ
                <Icon name="Image" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>Виртуальная галерея Клода Моне</p>
        </div>
      </footer>
    </div>
  );
};

export default Biography;