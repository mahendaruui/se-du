import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Heart,
    Users,
    BookOpen,
    Accessibility,
    GraduationCap,
    Handshake,
    Mail,
    MapPin,
    Globe,
    ArrowRight,
    CheckCircle2,
    Sparkles
} from 'lucide-react';
import { login } from '@/routes';
import { cn } from '@/lib/utils';
import { SparklesCore } from '@/components/ui/sparkles';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';

interface Service {
    id: number;
    name: string;
    description: string;
    icon: string;
    slug: string;
}

interface Partner {
    id: number;
    name: string;
    logo: string | null;
    website_url: string | null;
}

interface HomeProps {
    services: Service[];
    partners: Partner[];
}

export default function Home({ services = [], partners = [] }: HomeProps) {
    const { auth } = usePage<SharedData>().props;

    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
        heart: Heart,
        users: Users,
        'book-open': BookOpen,
        accessibility: Accessibility,
        'graduation-cap': GraduationCap,
        handshake: Handshake,
    };

    return (
        <>
            <Head title="SE-DU - Sentral Disabilitas Ubudiyah" />

            <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
                {/* Header/Navigation */}
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/assets/logo.png"
                                alt="SE-DU Logo"
                                className="h-12 w-12 object-contain"
                            />
                            <div>
                                <h1 className="text-lg font-bold leading-tight">SE-DU</h1>
                                <p className="text-xs text-muted-foreground">Sentral Disabilitas Ubudiyah</p>
                            </div>
                        </Link>
                        <nav className="hidden items-center gap-6 md:flex">
                            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                                Beranda
                            </Link>
                            <Link href="/tentang" className="text-sm font-medium transition-colors hover:text-primary">
                                Tentang
                            </Link>
                            <Link href="/layanan" className="text-sm font-medium transition-colors hover:text-primary">
                                Layanan
                            </Link>
                            <Link href="/berita" className="text-sm font-medium transition-colors hover:text-primary">
                                Berita
                            </Link>
                            <Link href="/galeri" className="text-sm font-medium transition-colors hover:text-primary">
                                Galeri
                            </Link>
                            <Link href="/kontak" className="text-sm font-medium transition-colors hover:text-primary">
                                Kontak
                            </Link>
                        </nav>
                        <div className="flex items-center gap-2">
                            {auth.user ? (
                                <Button asChild variant="default">
                                    <Link href="/dashboard">Dashboard</Link>
                                </Button>
                            ) : (
                                <Button asChild size="sm">
                                    <Link href={login()}>Masuk Admin</Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </header>

                {/* Hero Section with Aceternity UI Effects */}
                <section className="relative overflow-hidden py-20 lg:py-32">
                    {/* Background Beams from Aceternity UI */}
                    <BackgroundBeams className="-z-10 opacity-30" />

                    {/* Sparkles Effect */}
                    <div className="absolute inset-0 -z-10">
                        <SparklesCore
                            id="hero-sparkles"
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={50}
                            className="h-full w-full"
                            particleColor="hsl(var(--primary))"
                        />
                    </div>

                    {/* Animated grid background */}
                    <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

                    {/* Floating gradient orbs */}
                    <div className="absolute left-1/4 top-20 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" style={{ animationDuration: '4s' }} />
                    <div className="absolute right-1/4 bottom-20 h-96 w-96 animate-pulse rounded-full bg-secondary/10 blur-3xl" style={{ animationDuration: '6s', animationDelay: '1s' }} />
                    <div className="absolute left-1/2 top-1/2 h-96 w-96 animate-pulse rounded-full bg-accent/10 blur-3xl" style={{ animationDuration: '5s', animationDelay: '2s' }} />

                    <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mx-auto max-w-4xl text-center">
                            <Badge className="mb-4 animate-in fade-in slide-in-from-bottom-3 duration-1000 backdrop-blur-sm" variant="secondary">
                                <Sparkles className="mr-1 h-3 w-3" />
                                Unit Layanan Disabilitas Universitas Ubudiyah Indonesia
                            </Badge>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 lg:text-6xl">
                                Mewujudkan{' '}
                                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                    Kampus Inklusif
                                </span>
                                {' '}dan Aksesibel
                            </h1>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                                Platform digital untuk memberikan layanan pendampingan, aksesibilitas, dan dukungan
                                bagi mahasiswa penyandang disabilitas di Universitas Ubudiyah Indonesia.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                                <MovingBorderButton
                                    borderRadius="1rem"
                                    className="px-8 py-3 text-base font-medium"
                                    duration={3000}
                                >
                                    <a href="#layanan" className="flex items-center gap-2">
                                        Jelajahi Layanan
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </MovingBorderButton>
                                <Button size="lg" variant="outline" asChild>
                                    <a href="#tentang">Tentang SE-DU</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section with Glassmorphism */}
                <section className="relative border-y bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 py-12 backdrop-blur-sm">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="group text-center animate-in fade-in zoom-in duration-700">
                                <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent transition-all group-hover:scale-110">
                                    100+
                                </div>
                                <div className="text-sm font-medium text-muted-foreground">Mahasiswa Terlayani</div>
                            </div>
                            <div className="group text-center animate-in fade-in zoom-in duration-700 delay-100">
                                <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-secondary to-secondary/60 bg-clip-text text-transparent transition-all group-hover:scale-110">
                                    6
                                </div>
                                <div className="text-sm font-medium text-muted-foreground">Layanan Utama</div>
                            </div>
                            <div className="group text-center animate-in fade-in zoom-in duration-700 delay-200">
                                <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent transition-all group-hover:scale-110">
                                    {partners.length}+
                                </div>
                                <div className="text-sm font-medium text-muted-foreground">Mitra Kolaborasi</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="layanan" className="relative overflow-hidden py-20 lg:py-32">
                    {/* Background gradient orb */}
                    <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

                    <div className="container relative mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom duration-700">
                            <Badge variant="outline" className="mb-4 px-4 py-1.5">
                                <Heart className="mr-2 h-3 w-3" />
                                Layanan Kami
                            </Badge>
                            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
                                Layanan SE-DU
                            </h2>
                            <p className="mx-auto max-w-2xl text-muted-foreground">
                                Kami menyediakan berbagai layanan untuk mendukung mahasiswa penyandang disabilitas
                                dalam mencapai potensi maksimal mereka.
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {services.length > 0 ? (
                                services.map((service, index) => {
                                    const IconComponent = iconMap[service.icon] || Heart;
                                    return (
                                        <Card
                                            key={service.id}
                                            className={cn(
                                                "group relative overflow-hidden border-2 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8",
                                                `delay-[${index * 100}ms]`
                                            )}
                                        >
                                            {/* Shimmer effect on hover */}
                                            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 shimmer" />

                                            <CardHeader className="relative">
                                                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground group-hover:shadow-lg">
                                                    <IconComponent className="h-6 w-6" />
                                                </div>
                                                <CardTitle className="text-xl">{service.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="relative">
                                                <CardDescription className="text-sm leading-relaxed">
                                                    {service.description}
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    );
                                })
                            ) : (
                                <>
                                    <ServiceCard
                                        icon={<Heart className="h-6 w-6" />}
                                        title="Pendampingan Akademik & Psikososial"
                                        description="Dukungan akademik dan psikologis untuk membantu mahasiswa disabilitas dalam proses pembelajaran."
                                        delay={0}
                                    />
                                    <ServiceCard
                                        icon={<GraduationCap className="h-6 w-6" />}
                                        title="Bimbingan Karier & Pengembangan Diri"
                                        description="Program pengembangan karier dan pelatihan soft skills untuk masa depan yang lebih baik."
                                        delay={100}
                                    />
                                    <ServiceCard
                                        icon={<Accessibility className="h-6 w-6" />}
                                        title="Aksesibilitas Sarana & Prasarana"
                                        description="Penyesuaian fasilitas kampus agar mudah diakses oleh mahasiswa penyandang disabilitas."
                                        delay={200}
                                    />
                                    <ServiceCard
                                        icon={<BookOpen className="h-6 w-6" />}
                                        title="Media Pembelajaran Adaptif"
                                        description="Penyediaan media pembelajaran yang disesuaikan dengan kebutuhan mahasiswa disabilitas."
                                        delay={300}
                                    />
                                    <ServiceCard
                                        icon={<Users className="h-6 w-6" />}
                                        title="Konseling Inklusif & Advokasi"
                                        description="Layanan konseling dan advokasi hak-hak mahasiswa penyandang disabilitas."
                                        delay={400}
                                    />
                                    <ServiceCard
                                        icon={<Handshake className="h-6 w-6" />}
                                        title="Pelatihan Kesadaran Disabilitas"
                                        description="Sosialisasi dan pelatihan untuk meningkatkan kesadaran sivitas akademika tentang inklusivitas."
                                        delay={500}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </section>

                {/* Activities/Events Section */}
                <section id="kegiatan" className="py-20 lg:py-32">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom duration-700">
                            <Badge variant="secondary" className="mb-4 px-4 py-1.5">
                                <Sparkles className="mr-2 h-3 w-3" />
                                Kegiatan Kami
                            </Badge>
                            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
                                Aktivitas & Kegiatan SE-DU
                            </h2>
                            <p className="mx-auto max-w-2xl text-muted-foreground">
                                Berbagai kegiatan dan program yang telah kami selenggarakan untuk mendukung inklusivitas
                                dan kesadaran disabilitas di kampus
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* FGD Event */}
                            <Card className="group overflow-hidden transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                                <div className="relative overflow-hidden">
                                    <img
                                        src="/assets/FGD (1).jpg"
                                        alt="FGD SE-DU"
                                        className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <Badge className="absolute bottom-3 left-3 bg-primary text-primary-foreground">
                                        Focus Group Discussion
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-2">
                                        FGD Pengembangan Layanan Disabilitas
                                    </CardTitle>
                                    <CardDescription>
                                        Diskusi kelompok terfokus untuk mengembangkan program dan layanan yang lebih baik
                                        bagi mahasiswa disabilitas
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            {/* Launching Event */}
                            <Card className="group overflow-hidden transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                                <div className="relative overflow-hidden">
                                    <img
                                        src="/assets/launching (1).jpg"
                                        alt="Launching SE-DU"
                                        className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <Badge className="absolute bottom-3 left-3 bg-secondary text-secondary-foreground">
                                        Grand Launching
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-2">
                                        Peluncuran SE-DU Ubudiyah
                                    </CardTitle>
                                    <CardDescription>
                                        Acara peluncuran resmi Unit Layanan Disabilitas Universitas Ubudiyah Indonesia
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            {/* Benchmarking Event */}
                            <Card className="group overflow-hidden transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                                <div className="relative overflow-hidden">
                                    <img
                                        src="/assets/benchmarking.png"
                                        alt="Benchmarking"
                                        className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <Badge className="absolute bottom-3 left-3 bg-accent text-accent-foreground">
                                        Studi Banding
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-2">
                                        Benchmarking Best Practices
                                    </CardTitle>
                                    <CardDescription>
                                        Kunjungan studi banding untuk mempelajari praktik terbaik layanan disabilitas
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            {/* MOU Event */}
                            <Card className="group overflow-hidden transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-400">
                                <div className="relative overflow-hidden">
                                    <img
                                        src="/assets/mou1.jpg"
                                        alt="MOU Signing"
                                        className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <Badge className="absolute bottom-3 left-3 bg-primary text-primary-foreground">
                                        Kerjasama
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-2">
                                        Penandatanganan MOU
                                    </CardTitle>
                                    <CardDescription>
                                        Kerjasama dengan institusi mitra untuk meningkatkan layanan disabilitas
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            {/* FGD Event 2 */}
                            <Card className="group overflow-hidden transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-500">
                                <div className="relative overflow-hidden">
                                    <img
                                        src="/assets/FGD (2).jpg"
                                        alt="FGD Session"
                                        className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <Badge className="absolute bottom-3 left-3 bg-secondary text-secondary-foreground">
                                        Workshop
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-2">
                                        Workshop Kesadaran Disabilitas
                                    </CardTitle>
                                    <CardDescription>
                                        Pelatihan untuk meningkatkan pemahaman dan sensitivitas terhadap isu disabilitas
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            {/* Launching Event 2 */}
                            <Card className="group overflow-hidden transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-600">
                                <div className="relative overflow-hidden">
                                    <img
                                        src="/assets/launching (2).jpg"
                                        alt="Launching Ceremony"
                                        className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <Badge className="absolute bottom-3 left-3 bg-accent text-accent-foreground">
                                        Acara Khusus
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-2">
                                        Sosialisasi Program SE-DU
                                    </CardTitle>
                                    <CardDescription>
                                        Pengenalan program dan layanan SE-DU kepada sivitas akademika Universitas Ubudiyah
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>

                        <div className="mt-12 text-center">
                            <Button asChild size="lg" className="group">
                                <Link href="/galeri">
                                    Lihat Semua Galeri
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="tentang" className="bg-muted/50 py-20 lg:py-32">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                            <div className="animate-in fade-in slide-in-from-left duration-1000">
                                <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-4xl">
                                    Tentang SE-DU
                                </h2>
                                <div className="mb-6 space-y-4 text-muted-foreground">
                                    <p className="leading-relaxed">
                                        <strong className="text-foreground">SE-DU (Sentral Disabilitas Ubudiyah)</strong> adalah
                                        platform digital Unit Layanan Disabilitas di Universitas Ubudiyah Indonesia yang dirancang
                                        untuk mewujudkan kampus inklusif dan aksesibel bagi seluruh mahasiswa penyandang disabilitas.
                                    </p>
                                    <div className="rounded-lg border bg-card p-4">
                                        <h3 className="mb-2 font-semibold text-foreground">Visi Kami</h3>
                                        <p className="text-sm leading-relaxed">
                                            Menjadi pusat layanan disabilitas yang inklusif, aksesibel, dan berkeadilan bagi
                                            seluruh mahasiswa penyandang disabilitas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="animate-in fade-in slide-in-from-right duration-1000">
                                <h3 className="mb-6 text-xl font-semibold">Nilai-Nilai Utama</h3>
                                <div className="space-y-4">
                                    <ValueItem
                                        title="Inklusifitas"
                                        description="Menerima dan menghargai setiap perbedaan"
                                    />
                                    <ValueItem
                                        title="Aksesibilitas"
                                        description="Memastikan setiap mahasiswa dapat mengakses fasilitas dan layanan kampus"
                                    />
                                    <ValueItem
                                        title="Empati"
                                        description="Memahami kebutuhan mahasiswa disabilitas secara manusiawi dan berkeadilan"
                                    />
                                    <ValueItem
                                        title="Kolaborasi"
                                        description="Bekerja sama dengan berbagai pihak untuk memperkuat layanan"
                                    />
                                    <ValueItem
                                        title="Kemandirian"
                                        description="Mendorong mahasiswa disabilitas untuk berkembang dan berdaya"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                {partners.length > 0 && (
                    <section className="py-20 lg:py-32">
                        <div className="container mx-auto max-w-7xl px-4 md:px-6">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
                                    Mitra Kolaborasi
                                </h2>
                                <p className="mx-auto max-w-2xl text-muted-foreground">
                                    Kami menjalin kerja sama dengan berbagai lembaga untuk memperkuat layanan disabilitas.
                                </p>
                            </div>
                            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                                {partners.map((partner, index) => (
                                    <Card
                                        key={partner.id}
                                        className={cn(
                                            "group transition-all hover:shadow-md animate-in fade-in zoom-in duration-700",
                                            `delay-[${index * 100}ms]`
                                        )}
                                    >
                                        <CardContent className="flex flex-col items-center justify-center p-6">
                                            {partner.logo ? (
                                                <img
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    className="mb-3 h-16 w-16 object-contain grayscale transition-all group-hover:grayscale-0"
                                                />
                                            ) : (
                                                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                                                    <Handshake className="h-8 w-8 text-muted-foreground" />
                                                </div>
                                            )}
                                            <h3 className="text-center text-sm font-semibold">{partner.name}</h3>
                                            {partner.website_url && (
                                                <a
                                                    href={partner.website_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-2 text-xs text-primary hover:underline"
                                                >
                                                    Kunjungi Website
                                                </a>
                                            )}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Contact Section with Sparkles */}
                <section className="relative overflow-hidden border-t bg-muted/50 py-20 lg:py-32">
                    {/* Sparkles Background */}
                    <div className="absolute inset-0">
                        <SparklesCore
                            id="contact-sparkles"
                            background="transparent"
                            minSize={0.3}
                            maxSize={0.8}
                            particleDensity={30}
                            className="h-full w-full"
                            particleColor="hsl(var(--secondary))"
                        />
                    </div>

                    <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <Badge variant="secondary" className="mb-4 px-4 py-1.5 backdrop-blur-sm">
                                <Mail className="mr-2 h-3 w-3" />
                                Hubungi Kami
                            </Badge>
                            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
                                Siap Membantu Anda
                            </h2>
                            <p className="mb-8 text-muted-foreground">
                                Punya pertanyaan atau butuh bantuan? Jangan ragu untuk menghubungi kami.
                            </p>
                            <div className="grid gap-6 md:grid-cols-3">
                                <Card className="group border-2 transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                                    <CardContent className="flex flex-col items-center p-6">
                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:scale-110 group-hover:bg-primary">
                                            <Mail className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                                        </div>
                                        <h3 className="mb-1 font-semibold">Email</h3>
                                        <a href="mailto:sedu@uui.ac.id" className="text-sm text-muted-foreground hover:text-primary">
                                            sedu@uui.ac.id
                                        </a>
                                    </CardContent>
                                </Card>
                                <Card className="group border-2 transition-all hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1">
                                    <CardContent className="flex flex-col items-center p-6">
                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-all group-hover:scale-110 group-hover:bg-secondary">
                                            <Globe className="h-6 w-6 text-secondary transition-colors group-hover:text-secondary-foreground" />
                                        </div>
                                        <h3 className="mb-1 font-semibold">Website</h3>
                                        <a href="https://sedu.uui.ac.id" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                                            sedu.uui.ac.id
                                        </a>
                                    </CardContent>
                                </Card>
                                <Card className="group border-2 transition-all hover:border-accent/50 hover:shadow-lg hover:-translate-y-1">
                                    <CardContent className="flex flex-col items-center p-6">
                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-all group-hover:scale-110 group-hover:bg-accent">
                                            <MapPin className="h-6 w-6 text-accent transition-colors group-hover:text-accent-foreground" />
                                        </div>
                                        <h3 className="mb-1 font-semibold">Lokasi</h3>
                                        <p className="text-center text-sm text-muted-foreground">
                                            Universitas Ubudiyah Indonesia, Banda Aceh
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t py-8">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Heart className="h-4 w-4 fill-primary text-primary" />
                                <span>Dibuat untuk Kampus Inklusif</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                © 2025 SE-DU - Universitas Ubudiyah Indonesia
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

function ServiceCard({
    icon,
    title,
    description,
    delay = 0
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay?: number;
}) {
    return (
        <Card
            className={cn(
                "group transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700",
                `delay-[${delay}ms]`
            )}
        >
            <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {icon}
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
}

function ValueItem({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
                <h4 className="mb-1 font-semibold text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}
