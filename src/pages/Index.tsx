import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [seatsLeft] = useState(43);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-11-16T10:00:00').getTime();
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isEnvelopeOpen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f5f1ea] via-[#ede8dc] to-[#f5f1ea] flex items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="relative group cursor-pointer" onClick={() => setIsEnvelopeOpen(true)}>
            <img 
              src="https://cdn.poehali.dev/files/010aaffd-fc59-4109-ac42-d3a973af64ba.png" 
              alt="Приглашение" 
              className="w-full max-w-3xl mx-auto drop-shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_35px_60px_rgba(0,0,0,0.4)]"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center px-8 max-w-xl">
                <h1 className="text-3xl md:text-5xl font-bold text-[#4a3f35] mb-4 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Приглашение на встречу<br />
                  «Мужчины вперед»
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-2xl md:text-3xl text-[#4a3f35] font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Закрытое бизнес-событие для предпринимателей
            </p>
            <p className="text-lg md:text-xl text-[#4a3f35]/60 mt-4 italic" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Кликните на конверт
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white animate-fade-in" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <nav className="fixed top-0 left-0 right-0 bg-[#1a2253] z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              МУЖЧИНЫ ВПЕРЕД
            </div>
            <div className="hidden md:flex gap-6 text-sm">
              {['pain', 'hope', 'solution', 'socialproof', 'faq'].map(id => (
                <button key={id} onClick={() => scrollTo(id)} className="text-white/80 hover:text-white transition">
                  {id === 'pain' ? 'Проблема' : id === 'hope' ? 'Решение' : id === 'solution' ? 'Программа' : id === 'socialproof' ? 'Отзывы' : 'FAQ'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollTo('signup')} className="bg-[#f24822] hover:bg-[#d63f1e] text-white">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a2253] via-[#2a3563] to-[#1a2253] pt-20">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]" />
        
        <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#f24822] text-white text-xs tracking-wider font-semibold rounded-full">
              ОСТАЛОСЬ {seatsLeft} ИЗ 170 МЕСТ
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Прорвите потолок своего бизнеса<br />за одну встречу
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Закрытая бизнес-встреча для предпринимателей, готовых выйти за пределы текущих результатов.<br />
            <span className="font-semibold text-[#f24822]">16 ноября 2025</span>
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <Button onClick={() => scrollTo('signup')} className="bg-[#f24822] hover:bg-[#d63f1e] text-white px-10 py-6 text-lg">
              Забронировать место →
            </Button>
            <Button onClick={() => scrollTo('solution')} className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a2253] px-10 py-6 text-lg">
              Узнать программу
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: 'TrendingUp', text: 'Проверенные стратегии масштабирования' },
              { icon: 'Users', text: 'Нетворкинг с лидерами отрасли' },
              { icon: 'Target', text: 'Персональный план роста за 90 минут' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-white bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <Icon name={item.icon as any} size={24} className="text-[#f24822] flex-shrink-0" />
                <span className="text-sm text-left">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            {[
              { value: timeLeft.days, label: 'ДНЕЙ' },
              { value: timeLeft.hours, label: 'ЧАСОВ' },
              { value: timeLeft.minutes, label: 'МИНУТ' },
              { value: timeLeft.seconds, label: 'СЕКУНД' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs text-white/60 tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pain" className="py-24 px-6 bg-[#ededed]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2253] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Вы знаете, что ваш бизнес может больше.<br />Но почему-то застряли на одном уровне.
          </h2>
          <p className="text-xl text-[#222] mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            Вы вкладываете силы и время, но рост остановился. Может быть, вы работаете вечерами, но прибыль не растёт годами. Это системная проблема, а не ваш личный недостаток.
          </p>
          <Card className="p-8 bg-white border-l-4 border-[#f24822]">
            <p className="text-lg text-[#222] italic mb-4">
              "Андрей, владелец логистической компании, работал по 14 часов в день. Оборот стоял на месте три года."
            </p>
            <div className="bg-[#f24822]/10 p-6 rounded-lg">
              <p className="text-2xl font-semibold text-[#1a2253]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                67% владельцев бизнеса признают: главная проблема — дефицит времени и невозможность масштабирования.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="hope" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2253] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Но есть те, кто нашел выход.<br />И готовы поделиться системой.
          </h2>
          <p className="text-xl text-[#222] mb-16 text-center max-w-3xl mx-auto">
            Андрей вывел компанию на 34 млн в год, работая 6 часов в день. Решение — сменить подход, применить системные инструменты.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { number: '34 млн ₽', text: 'Оборот компании Андрея за год' },
              { number: '+73%', text: 'Рост среднего чека у Максима' },
              { number: '20 часов', text: 'Освободил Дмитрий в неделю' }
            ].map((item, i) => (
              <Card key={i} className="p-8 text-center bg-gradient-to-br from-[#1a2253] to-[#2a3563] text-white">
                <div className="text-5xl font-bold mb-4 text-[#f24822]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {item.number}
                </div>
                <p className="text-lg">{item.text}</p>
              </Card>
            ))}
          </div>

          <div className="bg-[#f24822]/10 p-8 rounded-lg text-center">
            <p className="text-3xl font-bold text-[#1a2253]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              94% участников применили новую стратегию уже в первую неделю
            </p>
          </div>
        </div>
      </section>

      <section id="solution" className="py-24 px-6 bg-[#1a2253] text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Встреча «Мужчины вперед»:<br />Ваш прямой путь к системному росту бизнеса
          </h2>
          <p className="text-xl mb-16 text-center max-w-3xl mx-auto text-white/90">
            Только практики — бизнес-планы, инсайты и рабочая атмосфера. 2 спикера, 170 участников, 90 минут, чек-листы, чат для поддержки.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: 'Target', title: 'Персональный план роста', text: 'Конкретные шаги для вашего бизнеса' },
              { icon: 'TrendingUp', title: 'Проверенные стратегии', text: 'Работающие методы масштабирования' },
              { icon: 'Users', title: 'Сильный нетворкинг', text: 'Знакомство с лидерами отрасли' },
              { icon: 'Zap', title: 'Выход из рутины', text: 'От операционки к стратегии' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition">
                <Icon name={item.icon as any} size={40} className="text-[#f24822] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                  <p className="text-white/80">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="socialproof" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2253] mb-16 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Отзывы участников
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Алексей Соколов',
                role: 'Владелец digital-агентства',
                text: 'За месяц удвоил конверсию. Билет окупился в первую неделю. Получил конкретные инструменты, а не просто мотивацию.',
                avatar: '👨‍💼'
              },
              {
                name: 'Игорь Петров',
                role: 'Владелец производственной компании',
                text: 'Команда выросла с 3 до 12 человек. Оборот +180%. Нашел партнеров для совместных проектов прямо на встрече.',
                avatar: '👔'
              }
            ].map((review, i) => (
              <Card key={i} className="p-8 bg-gradient-to-br from-white to-[#ededed] border-t-4 border-[#f24822]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{review.avatar}</div>
                  <div>
                    <div className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{review.name}</div>
                    <div className="text-sm text-[#222]/60">{review.role}</div>
                  </div>
                </div>
                <p className="text-lg text-[#222] italic leading-relaxed">"{review.text}"</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-4 bg-[#f24822]/10 rounded-lg">
              <p className="text-2xl font-bold text-[#1a2253]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                340+ участников за 5 лет
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="signup" className="py-24 px-6 bg-gradient-to-br from-[#f24822] to-[#d63f1e] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Инвестируйте в свой рост.<br />Места ограничены.
          </h2>

          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{seatsLeft}</div>
                <div className="text-sm">Мест осталось</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>3</div>
                <div className="text-sm">Дня до закрытия</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>7 500 ₽</div>
                <div className="text-sm">Ранняя цена</div>
              </div>
            </div>

            <div className="h-4 bg-white/20 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-white rounded-full" style={{ width: `${(127/170)*100}%` }} />
            </div>
            <p className="text-sm">127 из 170 мест уже забронировано</p>
          </div>

          <a href="https://t.me/Primelogdv" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-[#f24822] hover:bg-white/90 px-12 py-8 text-xl font-bold">
              Забронировать место на встрече →
            </Button>
          </a>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={20} />
              <span>Гарантия возврата</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CreditCard" size={20} />
              <span>Безопасная оплата</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} />
              <span>Счет для юрлиц</span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2253] mb-16 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Часто задаваемые вопросы
          </h2>

          <div className="space-y-6">
            {[
              { q: 'Когда и где пройдет встреча?', a: '16 ноября 2025, Москва, с 10:00 до 12:30' },
              { q: 'Для кого эта встреча?', a: 'Для владельцев и совладельцев бизнеса с оборотом от 5 млн рублей' },
              { q: 'Что если не смогу прийти?', a: 'Можно вернуть средства за 7 дней или передать билет другому участнику' },
              { q: 'Сколько участников?', a: 'Максимум 170. Ограничиваем для качества нетворкинга' },
              { q: 'Что включено?', a: 'Программа, раздаточные материалы, кофе-брейк, чат поддержки' },
              { q: 'Оплата от юрлица?', a: 'Да, выставим счет на ваши реквизиты' }
            ].map((faq, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition border-l-4 border-[#f24822]">
                <h3 className="text-lg font-bold text-[#1a2253] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {faq.q}
                </h3>
                <p className="text-[#222]/80">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1a2253] text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>МУЖЧИНЫ ВПЕРЕД</h3>
              <p className="text-white/60 text-sm">Закрытые бизнес-встречи для предпринимателей</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>events@muzhchini-vpered.ru</p>
                <p>@muzhchini_vpered_support</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#f24822] transition"><Icon name="Send" size={24} /></a>
                <a href="#" className="hover:text-[#f24822] transition"><Icon name="Instagram" size={24} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2025 Мужчины вперед. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setIsModalOpen(false)}>
          <Card className="max-w-md w-full p-8 bg-white" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-[#1a2253] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Забронировать место
            </h3>
            <form className="space-y-4">
              <input type="text" placeholder="Ваше имя" className="w-full p-3 border border-gray-300 rounded" />
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" />
              <input type="tel" placeholder="Телефон" className="w-full p-3 border border-gray-300 rounded" />
              <Button className="w-full bg-[#f24822] hover:bg-[#d63f1e] text-white py-4">
                Забронировать за 7 500 ₽
              </Button>
            </form>
            <p className="text-xs text-center mt-4 text-gray-500">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;