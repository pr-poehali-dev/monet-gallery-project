import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Impressionism = () => {
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
            <h1 className="text-6xl font-bold mb-8 text-center">Импрессионизм</h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Революция в искусстве XIX века
            </p>

            <div className="mb-16">
              <img 
                src="https://cdn.poehali.dev/projects/88088953-6f50-4e04-929d-7634146d1072/files/fefc442d-e7a9-4e6d-823b-c1f1078ac42f.jpg" 
                alt="Импрессионистский пейзаж" 
                className="rounded-lg shadow-xl w-full"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                «Впечатление. Восход солнца» — картина, давшая название импрессионизму
              </p>
            </div>

            <div className="space-y-12">
              <section className="bg-card p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Info" size={28} className="text-primary" />
                  <h2 className="text-3xl font-semibold">Что такое импрессионизм?</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Импрессионизм — художественное направление, зародившееся во Франции в 1860-х годах. 
                  Название произошло от картины Клода Моне «Impression, soleil levant» 
                  («Впечатление. Восход солнца»).
                </p>
                <p className="text-lg leading-relaxed">
                  Импрессионисты стремились запечатлеть мимолетное впечатление, изменчивость света 
                  и атмосферы, отказавшись от четких контуров и детальной прорисовки.
                </p>
              </section>

              <section className="bg-card p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Lightbulb" size={28} className="text-primary" />
                  <h2 className="text-3xl font-semibold">Ключевые особенности стиля</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Sun" size={20} className="text-primary" />
                      Свет и цвет
                    </h3>
                    <p className="leading-relaxed">
                      Изучение влияния света на цвет объектов в разное время суток. 
                      Использование чистых, ярких красок.
                    </p>
                  </div>
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Brush" size={20} className="text-primary" />
                      Мазки
                    </h3>
                    <p className="leading-relaxed">
                      Видимые, раздельные мазки краски. Картины создавались быстро, 
                      чтобы уловить момент.
                    </p>
                  </div>
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Trees" size={20} className="text-primary" />
                      Пленэр
                    </h3>
                    <p className="leading-relaxed">
                      Работа на открытом воздухе позволяла наблюдать естественное освещение 
                      и атмосферные эффекты.
                    </p>
                  </div>
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Focus" size={20} className="text-primary" />
                      Композиция
                    </h3>
                    <p className="leading-relaxed">
                      Необычные ракурсы и кадрирование. Влияние японских гравюр 
                      на построение композиции.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-card p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Target" size={28} className="text-primary" />
                  <h2 className="text-3xl font-semibold">Темы и сюжеты</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Импрессионисты предпочитали изображать:
                  </p>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Пейзажи с изменчивым освещением — реки, поля, сады</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Городские сцены — бульвары, вокзалы, кафе</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Повседневную жизнь — прогулки, пикники, отдых</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Воду и отражения — ключевая тема для Моне</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-gradient-to-br from-primary/10 to-secondary/30 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Quote" size={28} className="text-primary" />
                  <h2 className="text-3xl font-semibold">Философия Моне</h2>
                </div>
                <blockquote className="text-xl italic leading-relaxed border-l-4 border-primary pl-6 my-6">
                  «Я хотел бы написать так, как поет птица»
                </blockquote>
                <p className="text-lg leading-relaxed">
                  Моне верил, что искусство должно быть спонтанным и непосредственным. 
                  Он стремился передать не объект, а впечатление от него, 
                  показать, как свет и атмосфера преображают мир вокруг нас.
                </p>
              </section>

              <section className="bg-card p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="TrendingUp" size={28} className="text-primary" />
                  <h2 className="text-3xl font-semibold">Влияние на искусство</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Импрессионизм стал отправной точкой для многих направлений современного искусства. 
                  Он освободил художников от академических правил и открыл путь к экспериментам 
                  с цветом, формой и светом.
                </p>
                <p className="text-lg leading-relaxed">
                  Работы импрессионистов повлияли на постимпрессионизм, фовизм, абстракционизм 
                  и многие другие течения XX века.
                </p>
              </section>
            </div>

            <div className="mt-16 flex justify-center gap-6">
              <Link 
                to="/"
                className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg hover:bg-secondary/80 transition-colors text-lg font-semibold"
              >
                <Icon name="ArrowLeft" size={20} />
                Биография Моне
              </Link>
              <Link 
                to="/gallery"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                Галерея работ
                <Icon name="ArrowRight" size={20} />
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

export default Impressionism;
