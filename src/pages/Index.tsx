import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-20T18:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-montserrat tracking-[0.2em] uppercase border border-white/20">
              20 ноября 2025 • 18:00
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-cormorant font-bold text-white mb-8 leading-[0.95] tracking-tight animate-slide-up">
            Я ДОСТАТОЧНО<br />ХОРОША
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-montserrat font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Показ капсульной коллекции одежды<br />
            Социальный проект «Код публичности»
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Button 
              onClick={() => scrollToSection('program')}
              className="bg-white text-black hover:bg-white/90 transition-all duration-300 px-8 py-6 font-montserrat text-sm tracking-wider"
            >
              Программа
            </Button>
            <Button 
              onClick={() => window.open('https://maps.google.com/?q=Кутузовский+просп.,+36,+стр.+5А', '_blank')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 font-montserrat text-sm tracking-wider"
            >
              <Icon name="MapPin" size={16} className="mr-2" />
              Как добраться
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              { value: timeLeft.days, label: 'ДНЕЙ' },
              { value: timeLeft.hours, label: 'ЧАСОВ' },
              { value: timeLeft.minutes, label: 'МИНУТ' },
              { value: timeLeft.seconds, label: 'СЕКУНД' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-7xl font-cormorant font-bold text-white mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm font-montserrat tracking-[0.2em] text-white/60">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/40" />
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <span className="inline-block px-6 py-2 bg-black text-white text-xs font-montserrat tracking-[0.2em] uppercase">
              О КОЛЛЕКЦИИ
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-cormorant font-light text-black mb-12 leading-tight">
            Нам очень ценно, что Вы<br />разделите с нами это событие
          </h2>
          
          <p className="text-lg md:text-xl text-black/70 font-montserrat font-light leading-relaxed max-w-3xl mx-auto mb-8">
            В вещах коллекции «Я достаточно хороша» очень удобно, красиво и счастливо жить свою жизнь и просто быть собой!
          </p>

          <div className="flex gap-3 justify-center flex-wrap mt-12">
            <span className="inline-block px-5 py-2 border-2 border-black text-black text-xs font-montserrat tracking-[0.15em] uppercase">
              СОЦИАЛЬНЫЙ ПРОЕКТ
            </span>
            <span className="inline-block px-5 py-2 border-2 border-black text-black text-xs font-montserrat tracking-[0.15em] uppercase">
              КОД ПУБЛИЧНОСТИ
            </span>
          </div>
        </div>
      </section>

      <section id="program" className="min-h-screen flex items-center justify-center px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-black text-white text-xs font-montserrat tracking-[0.2em] uppercase mb-8">
              18:00 – 21:00
            </span>
            <h2 className="text-5xl md:text-7xl font-cormorant font-semibold text-black tracking-tight">
              Программа вечера
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Mic',
                title: 'Приветствие основателя',
                description: 'Ана Мавричева, лидер сообщества «код публичности»',
                time: '18:00'
              },
              {
                icon: 'Sparkles',
                title: 'Лекция стилистов',
                description: 'О трендах осень – зима 25/26',
                time: '18:15'
              },
              {
                icon: 'Shirt',
                title: 'Показ коллекции',
                description: 'Капсульная коллекция «Я достаточно хороша»',
                time: '18:45'
              },
              {
                icon: 'Users',
                title: 'Нетворкинг',
                description: 'Общение и консультации стилистов',
                time: '19:30'
              },
              {
                icon: 'ShoppingBag',
                title: 'Маркет',
                description: 'Эксклюзивные коллекции партнёров',
                time: '19:30'
              },
              {
                icon: 'Wine',
                title: 'Фуршет',
                description: 'Игристое вино и лёгкие закуски',
                time: '18:00'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon 
                    name={item.icon as any} 
                    size={36} 
                    className="text-black group-hover:scale-110 transition-transform duration-300" 
                    strokeWidth={1.5} 
                  />
                  <span className="text-sm font-montserrat text-black/40 tracking-wider">
                    {item.time}
                  </span>
                </div>
                <h3 className="text-2xl font-cormorant font-semibold text-black mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-black/60 font-montserrat text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <span className="inline-block px-6 py-2 border border-white/20 text-white text-xs font-montserrat tracking-[0.2em] uppercase">
              ДРЕСС-КОД
            </span>
          </div>
          
          <div className="text-9xl md:text-[12rem] font-cormorant font-bold mb-8 tracking-tight leading-none">
            TOTAL<br />BLACK
          </div>
          
          <p className="text-xl font-montserrat font-light text-white/60 tracking-widest">
            СТИЛЬ: ДЕЛОВОЙ
          </p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <span className="inline-block px-6 py-2 bg-black text-white text-xs font-montserrat tracking-[0.2em] uppercase">
              МЕСТО ПРОВЕДЕНИЯ
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-cormorant font-light text-black mb-8 leading-tight">
            Кутузовский проспект,<br />36, строение 5А
          </h2>
          
          <p className="text-lg text-black/60 font-montserrat mb-12">
            БЦ «Лотте Плаза», 5 минут от метро Киевская
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Icon name="Train" size={32} className="text-black mx-auto mb-4" strokeWidth={1.5} />
              <div className="font-montserrat text-sm text-black/60">Метро «Киевская»<br />5 минут пешком</div>
            </div>
            <div className="text-center">
              <Icon name="Car" size={32} className="text-black mx-auto mb-4" strokeWidth={1.5} />
              <div className="font-montserrat text-sm text-black/60">Парковка<br />В здании БЦ</div>
            </div>
            <div className="text-center">
              <Icon name="Clock" size={32} className="text-black mx-auto mb-4" strokeWidth={1.5} />
              <div className="font-montserrat text-sm text-black/60">Начало регистрации<br />17:45</div>
            </div>
          </div>

          <Button 
            onClick={() => window.open('https://maps.google.com/?q=Кутузовский+просп.,+36,+стр.+5А', '_blank')}
            className="bg-black text-white hover:bg-black/90 transition-all duration-300 px-10 py-6 font-montserrat text-sm tracking-wider"
          >
            <Icon name="MapPin" size={18} className="mr-2" />
            Открыть в картах
          </Button>
        </div>
      </section>

      <footer className="bg-black text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left mb-12">
            <div>
              <h3 className="font-cormorant text-2xl font-semibold mb-4">КОД ПУБЛИЧНОСТИ</h3>
              <p className="font-montserrat text-sm text-white/50">
                Социальный проект
              </p>
            </div>
            <div>
              <p className="font-montserrat text-sm mb-4 tracking-wide">Следите за нами</p>
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
              <p className="font-montserrat text-sm mb-4 tracking-wide">Контакты</p>
              <a 
                href="mailto:info@kodpublichnosti.ru" 
                className="text-white/70 hover:text-white transition-colors font-montserrat text-sm"
              >
                info@kodpublichnosti.ru
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="font-montserrat text-sm text-white/40">
              © 2025 «Я достаточно хороша». Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
