import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 11,
    seconds: 11
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const programItems = [
    {
      icon: 'Mic',
      title: 'Приветствие основателя',
      description: 'Ана Мавричева, лидер сообщества «код публичности»'
    },
    {
      icon: 'Sparkles',
      title: 'Лекция стилистов',
      description: 'О трендах осень – зима 25/26'
    },
    {
      icon: 'Shirt',
      title: 'Показ коллекции',
      description: 'Капсульная коллекция «Я достаточно хороша»'
    },
    {
      icon: 'Users',
      title: 'Нетворкинг',
      description: 'Общение и консультации стилистов'
    },
    {
      icon: 'ShoppingBag',
      title: 'Маркет',
      description: 'Эксклюзивные коллекции партнёров'
    },
    {
      icon: 'Wine',
      title: 'Фуршет',
      description: 'Игристое вино и лёгкие закуски'
    }
  ];

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Кутузовский+просп.,+36,+стр.+5А', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-[#F5F5F5]">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center max-w-7xl">
          <div className="text-xl font-cormorant font-semibold tracking-[0.2em] uppercase">
            КОД ПУБЛИЧНОСТИ
          </div>
          <Button 
            onClick={handleMapClick}
            className="bg-black text-white hover:bg-black/90 transition-all duration-300 rounded-full px-6 py-5 font-montserrat text-sm tracking-wider"
          >
            <Icon name="MapPin" size={16} className="mr-2" />
            Открыть карту
          </Button>
        </div>
      </header>

      <main className="pt-32">
        <section className="py-16 px-6 animate-fade-in">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-cormorant font-light mb-8 leading-[1.2] tracking-tight">
              Нам очень ценно, что Вы разделите с нами это событие!
            </h1>
            <p className="text-base md:text-lg text-black/60 font-montserrat font-light leading-relaxed">
              Ваш билет на показ капсульной коллекции одежды<br />
              <span className="font-medium text-black">«Я достаточно хороша»</span>
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-[#F5F5F5]">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="mb-12 flex gap-3 justify-center flex-wrap">
              <span className="inline-block px-5 py-2 bg-black text-white text-xs font-montserrat tracking-[0.15em] uppercase">
                СОЦИАЛЬНЫЙ ПРОЕКТ
              </span>
              <span className="inline-block px-5 py-2 border-2 border-black text-xs font-montserrat tracking-[0.15em] uppercase">
                СООБЩЕСТВО «КОД ПУБЛИЧНОСТИ»
              </span>
            </div>
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-cormorant font-bold mb-12 leading-none tracking-tight">
              Я ДОСТАТОЧНО<br />ХОРОША
            </h2>
            <p className="text-lg md:text-xl font-montserrat font-light text-black/70 max-w-4xl mx-auto leading-relaxed">
              В вещах коллекции «Я достаточно хороша» очень удобно, красиво и счастливо жить свою жизнь и просто быть собой!
            </p>
          </div>
        </section>

        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h3 className="text-4xl md:text-5xl font-cormorant font-semibold text-center mb-20 tracking-tight">
              Программа мероприятия
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-10 bg-white border-[#F5F5F5] border-2 hover:border-black transition-all duration-300 hover:-translate-y-1 rounded-none"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <Icon name={item.icon as any} size={32} className="text-black" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-2xl font-cormorant font-semibold mb-3 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-black/60 font-montserrat text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-black text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h3 className="text-4xl md:text-5xl font-cormorant font-semibold mb-8 tracking-tight">
              Дресс-код
            </h3>
            <div className="text-8xl md:text-9xl font-cormorant font-bold mb-6 tracking-[0.05em] leading-none">
              TOTAL BLACK
            </div>
            <p className="text-lg font-montserrat font-light text-white/70 tracking-wide">
              Стиль: деловой
            </p>
          </div>
        </section>

        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h3 className="text-4xl md:text-5xl font-cormorant font-semibold mb-16 tracking-tight">
              До начала показа осталось
            </h3>
            <div className="flex justify-center gap-6 md:gap-12 flex-wrap">
              {[
                { value: timeLeft.hours, label: 'ЧАСОВ' },
                { value: timeLeft.minutes, label: 'МИНУТ' },
                { value: timeLeft.seconds, label: 'СЕКУНД' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-black text-white w-28 h-28 md:w-36 md:h-36 flex items-center justify-center text-5xl md:text-7xl font-cormorant font-bold">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="mt-6 text-xs md:text-sm font-montserrat tracking-[0.2em] text-black/60">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <p className="font-montserrat text-sm text-white/50">
                © 2025 «Я достаточно хороша»
              </p>
            </div>
            <div>
              <p className="font-montserrat text-sm mb-4 tracking-wide">Следите за нами:</p>
              <div className="flex gap-6 justify-center md:justify-start">
                <a href="#" className="hover:text-white/70 transition-colors">
                  <Icon name="Instagram" size={22} strokeWidth={1.5} />
                </a>
                <a href="#" className="hover:text-white/70 transition-colors">
                  <Icon name="Youtube" size={22} strokeWidth={1.5} />
                </a>
                <a href="#" className="hover:text-white/70 transition-colors">
                  <Icon name="Send" size={22} strokeWidth={1.5} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-montserrat text-sm mb-4 tracking-wide">Контакты:</p>
              <a 
                href="mailto:info@kodpublichnosti.ru" 
                className="text-white/70 hover:text-white transition-colors font-montserrat text-sm"
              >
                info@kodpublichnosti.ru
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;