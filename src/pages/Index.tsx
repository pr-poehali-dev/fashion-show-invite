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
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-cormorant font-semibold tracking-wider">
            КОД ПУБЛИЧНОСТИ
          </div>
          <Button 
            onClick={handleMapClick}
            className="bg-black text-white hover:bg-gray-800 transition-all duration-300 font-montserrat"
          >
            <Icon name="MapPin" size={16} className="mr-2" />
            Открыть карту
          </Button>
        </div>
      </header>

      <main className="pt-24">
        <section className="py-20 px-6 animate-fade-in">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-cormorant font-light mb-6 leading-tight">
              Нам очень ценно, что Вы разделите с нами это событие!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-montserrat font-light">
              Ваш билет на показ капсульной коллекции одежды<br />
              <span className="font-semibold">«Я достаточно хороша»</span>
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-5xl text-center animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-black text-white text-sm font-montserrat tracking-wider mb-4">
                СОЦИАЛЬНЫЙ ПРОЕКТ
              </span>
              <span className="inline-block px-4 py-2 border border-black text-sm font-montserrat tracking-wider mb-4 ml-2">
                СООБЩЕСТВО «КОД ПУБЛИЧНОСТИ»
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-cormorant font-bold mb-8 leading-none">
              Я ДОСТАТОЧНО<br />ХОРОША
            </h2>
            <p className="text-xl md:text-2xl font-montserrat font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
              В вещах коллекции «Я достаточно хороша» очень удобно, красиво и счастливо жить свою жизнь и просто быть собой!
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-4xl md:text-5xl font-cormorant font-semibold text-center mb-16">
              Программа мероприятия
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-8 bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <Icon name={item.icon as any} size={40} className="text-black" />
                  </div>
                  <h4 className="text-xl font-cormorant font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 font-montserrat text-sm">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-black text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-5xl md:text-6xl font-cormorant font-semibold mb-6">
              Дресс-код
            </h3>
            <div className="text-7xl md:text-9xl font-cormorant font-bold mb-4 tracking-wider">
              TOTAL BLACK
            </div>
            <p className="text-xl font-montserrat font-light text-gray-300">
              Стиль: деловой
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-4xl md:text-5xl font-cormorant font-semibold mb-8">
              До начала показа осталось
            </h3>
            <div className="flex justify-center gap-4 md:gap-8">
              {[
                { value: timeLeft.hours, label: 'ЧАСОВ' },
                { value: timeLeft.minutes, label: 'МИНУТ' },
                { value: timeLeft.seconds, label: 'СЕКУНД' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-black text-white w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-4xl md:text-6xl font-cormorant font-bold border-4 border-black">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="mt-4 text-sm md:text-base font-montserrat tracking-wider text-gray-600">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <p className="font-montserrat text-sm text-gray-400">
                © 2025 «Я достаточно хороша»
              </p>
            </div>
            <div>
              <p className="font-montserrat text-sm mb-2">Следите за нами:</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-montserrat text-sm mb-2">Контакты:</p>
              <a href="mailto:info@kodpublichnosti.ru" className="text-gray-400 hover:text-white transition-colors font-montserrat text-sm">
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
