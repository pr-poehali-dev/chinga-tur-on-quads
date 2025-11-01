import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [participants, setParticipants] = useState(1);
  const [selectedTour, setSelectedTour] = useState<string>('');

  const tours = [
    {
      id: 'classic',
      title: 'Классический маршрут',
      duration: '4 часа',
      distance: '60 км',
      price: 8000,
      description: 'Путешествие по основным историческим местам, связанным с Чингисханом',
      difficulty: 'Легкий',
      image: 'https://cdn.poehali.dev/projects/27716830-cd91-4dfc-b56a-cdde1427aa0d/files/6dd957ae-58d1-4ac0-8e2e-4dd58fd6e072.jpg'
    },
    {
      id: 'adventure',
      title: 'Приключенческий тур',
      duration: '6 часов',
      distance: '90 км',
      price: 12000,
      description: 'Экстремальный маршрут через горы и степи с посещением древних памятников',
      difficulty: 'Средний',
      image: 'https://cdn.poehali.dev/projects/27716830-cd91-4dfc-b56a-cdde1427aa0d/files/ac3926e0-7834-491d-8a82-f1534706f408.jpg'
    },
    {
      id: 'extreme',
      title: 'Экстремальный маршрут',
      duration: '8 часов',
      distance: '120 км',
      price: 16000,
      description: 'Полный день приключений с прохождением сложных горных участков',
      difficulty: 'Сложный',
      image: 'https://cdn.poehali.dev/projects/27716830-cd91-4dfc-b56a-cdde1427aa0d/files/c8892f43-15aa-4191-91b9-a95a613cdaa2.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Невероятные эмоции! Гид рассказывал интересные истории, маршрут продуман до мелочей.',
      date: '15 октября 2024'
    },
    {
      name: 'Марина К.',
      rating: 5,
      text: 'Организация на высоте, квадроциклы в отличном состоянии. Рекомендую всем!',
      date: '8 октября 2024'
    },
    {
      name: 'Дмитрий П.',
      rating: 4,
      text: 'Очень понравилось! Единственное - хотелось бы больше времени на фотосессии.',
      date: '22 сентября 2024'
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/27716830-cd91-4dfc-b56a-cdde1427aa0d/files/6dd957ae-58d1-4ac0-8e2e-4dd58fd6e072.jpg',
    'https://cdn.poehali.dev/projects/27716830-cd91-4dfc-b56a-cdde1427aa0d/files/ac3926e0-7834-491d-8a82-f1534706f408.jpg',
    'https://cdn.poehali.dev/projects/27716830-cd91-4dfc-b56a-cdde1427aa0d/files/c8892f43-15aa-4191-91b9-a95a613cdaa2.jpg',
    'https://cdn.poehali.dev/projects/27716830-cd91-4dfc-b56a-cdde1427aa0d/files/6dd957ae-58d1-4ac0-8e2e-4dd58fd6e072.jpg',
    'https://cdn.poehali.dev/projects/27716830-cd91-4dfc-b56a-cdde1427aa0d/files/ac3926e0-7834-491d-8a82-f1534706f408.jpg',
    'https://cdn.poehali.dev/projects/27716830-cd91-4dfc-b56a-cdde1427aa0d/files/c8892f43-15aa-4191-91b9-a95a613cdaa2.jpg'
  ];

  const handleBooking = () => {
    if (!selectedTour) {
      toast({
        title: 'Выберите тур',
        description: 'Пожалуйста, выберите маршрут для бронирования',
        variant: 'destructive'
      });
      return;
    }

    const tour = tours.find(t => t.id === selectedTour);
    const totalPrice = tour ? tour.price * participants : 0;

    toast({
      title: 'Бронирование отправлено!',
      description: `Тур: ${tour?.title}. Дата: ${selectedDate?.toLocaleDateString('ru-RU')}. Участников: ${participants}. Сумма: ${totalPrice}₽`
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Mountain" size={32} className="text-primary" />
              <span className="text-2xl font-heading font-bold text-foreground">Чингисхан Тур</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#tours" className="text-foreground hover:text-primary transition-colors font-medium">Маршруты</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">Галерея</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
              <Button className="font-medium">Забронировать</Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/27716830-cd91-4dfc-b56a-cdde1427aa0d/files/6dd957ae-58d1-4ac0-8e2e-4dd58fd6e072.jpg" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 drop-shadow-lg">
            Приключение по местам<br />Великого Хана
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Почувствуйте дух свободы на квадроциклах. Исследуйте исторические места и насладитесь невероятными пейзажами.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg font-semibold" onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Compass" size={20} className="mr-2" />
              Выбрать маршрут
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-semibold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">Наши маршруты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите маршрут, который подходит вашему уровню подготовки и желанию к приключениям
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-64 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {tour.difficulty}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{tour.title}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Map" size={16} className="text-primary" />
                      <span>{tour.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-bold text-primary mt-4">
                      <Icon name="Wallet" size={20} />
                      <span>{tour.price.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" onClick={() => setSelectedTour(tour.id)}>
                        <Icon name="Calendar" size={18} className="mr-2" />
                        Забронировать
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="font-heading text-2xl">Бронирование: {tour.title}</DialogTitle>
                        <DialogDescription>Выберите дату и количество участников</DialogDescription>
                      </DialogHeader>
                      <Tabs defaultValue="date" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="date">Дата</TabsTrigger>
                          <TabsTrigger value="details">Детали</TabsTrigger>
                        </TabsList>
                        <TabsContent value="date" className="space-y-4">
                          <div className="flex justify-center">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled={(date) => date < new Date()}
                              className="rounded-md border"
                            />
                          </div>
                        </TabsContent>
                        <TabsContent value="details" className="space-y-4">
                          <div>
                            <Label htmlFor="participants">Количество участников</Label>
                            <Input
                              id="participants"
                              type="number"
                              min="1"
                              max="10"
                              value={participants}
                              onChange={(e) => setParticipants(Number(e.target.value))}
                              className="mt-2"
                            />
                          </div>
                          <div className="bg-muted p-4 rounded-lg space-y-2">
                            <div className="flex justify-between">
                              <span>Цена за человека:</span>
                              <span className="font-semibold">{tour.price.toLocaleString('ru-RU')} ₽</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Участников:</span>
                              <span className="font-semibold">{participants}</span>
                            </div>
                            <div className="border-t border-border pt-2 flex justify-between text-lg font-bold text-primary">
                              <span>Итого:</span>
                              <span>{(tour.price * participants).toLocaleString('ru-RU')} ₽</span>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="name">Ваше имя</Label>
                            <Input id="name" placeholder="Введите ваше имя" className="mt-2" />
                          </div>
                          <div>
                            <Label htmlFor="phone">Телефон</Label>
                            <Input id="phone" placeholder="+7 (___) ___-__-__" className="mt-2" />
                          </div>
                          <Button className="w-full" size="lg" onClick={handleBooking}>
                            Подтвердить бронирование
                          </Button>
                        </TabsContent>
                      </Tabs>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">Галерея</h2>
            <p className="text-lg text-muted-foreground">Впечатления наших путешественников</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">Отзывы</h2>
            <p className="text-lg text-muted-foreground">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-lg mb-8 opacity-90">
              Остались вопросы? Наша команда готова помочь вам спланировать идеальное приключение!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="pt-6 text-center">
                  <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
                  <p className="font-semibold mb-1">Телефон</p>
                  <p className="text-sm opacity-90">+7 (999) 123-45-67</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="pt-6 text-center">
                  <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm opacity-90">info@chingiztour.com</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="pt-6 text-center">
                  <Icon name="MapPin" size={32} className="mx-auto mb-3 text-primary" />
                  <p className="font-semibold mb-1">Адрес</p>
                  <p className="text-sm opacity-90">Улан-Батор, Монголия</p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="text-lg font-semibold bg-primary hover:bg-primary/90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Mountain" size={28} />
            <span className="text-xl font-heading font-bold">Чингисхан Тур</span>
          </div>
          <p className="text-sm opacity-80">© 2024 Чингисхан Тур. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
