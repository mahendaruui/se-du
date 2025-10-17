import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Heart,
    Users,
    BookOpen,
    Accessibility,
    GraduationCap,
    Handshake,
    ArrowRight
} from 'lucide-react';
import { login } from '@/routes';
import { cn } from '@/lib/utils';

interface Service {
    id: number;
    name: string;
    description: string;
    icon: string;
    slug: string;
}

interface ServicesProps {
    services: Service[];
}

export default function Services({ services = [] }: ServicesProps) {
    const { auth } = usePage<SharedData>().props;

    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
        heart: Heart,
        users: Users,
        'book-open': BookOpen,
        accessibility: Accessibility,
        'graduation-cap': GraduationCap,
        handshake: Handshake,
    };

    const defaultServices = [
        {
            id: 1,
            name: 'Pendampingan Akademik & Psikososial',
            description: 'Dukungan akademik dan psikologis untuk membantu mahasiswa disabilitas dalam proses pembelajaran. Kami menyediakan konselor profesional dan mentor akademik yang memahami kebutuhan khusus mahasiswa penyandang disabilitas.',
            icon: 'heart',
            slug: 'pendampingan-akademik-psikososial'
        },
        {
            id: 2,
            name: 'Bimbingan Karier & Pengembangan Diri',
            description: 'Program pengembangan karier dan pelatihan soft skills untuk masa depan yang lebih baik. Termasuk pelatihan interview, resume writing, dan networking untuk mempersiapkan mahasiswa menghadapi dunia kerja.',
            icon: 'graduation-cap',
            slug: 'bimbingan-karier-pengembangan-diri'
        },
        {
            id: 3,
            name: 'Aksesibilitas Sarana & Prasarana',
            description: 'Penyesuaian fasilitas kampus agar mudah diakses oleh mahasiswa penyandang disabilitas. Meliputi ramp, elevator, toilet khusus, ruang kelas aksesibel, dan teknologi assistive untuk pembelajaran.',
            icon: 'accessibility',
            slug: 'aksesibilitas-sarana-prasarana'
        },
        {
            id: 4,
            name: 'Media Pembelajaran Adaptif',
            description: 'Penyediaan media pembelajaran yang disesuaikan dengan kebutuhan mahasiswa disabilitas. Tersedia dalam format braille, audio, large print, dan digital accessible untuk berbagai jenis disabilitas.',
            icon: 'book-open',
            slug: 'media-pembelajaran-adaptif'
        },
        {
            id: 5,
            name: 'Konseling Inklusif & Advokasi',
            description: 'Layanan konseling dan advokasi hak-hak mahasiswa penyandang disabilitas. Membantu mahasiswa dalam mengakses hak-hak mereka dan mengatasi berbagai kendala di lingkungan kampus.',
            icon: 'users',
            slug: 'konseling-inklusif-advokasi'
        },
        {
            id: 6,
            name: 'Pelatihan Kesadaran Disabilitas',
            description: 'Sosialisasi dan pelatihan untuk meningkatkan kesadaran sivitas akademika tentang inklusivitas. Program ini ditujukan untuk dosen, staff, dan mahasiswa umum agar lebih memahami dan mendukung rekan disabilitas.',
            icon: 'handshake',
            slug: 'pelatihan-kesadaran-disabilitas'
        }
    ];

    const displayServices = services.length > 0 ? services : defaultServices;

    return (
        <>
            <Head title="Layanan SE-DU - Sentral Disabilitas Ubudiyah" />

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
                            <Link href="/layanan" className="text-sm font-medium text-primary">
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
                                <Button asChild variant="default" size="sm">
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

                {/* Hero Section */}
                <section className="relative overflow-hidden py-16 lg:py-24">
                    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
                                Layanan SE-DU
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Berbagai layanan untuk mendukung mahasiswa penyandang disabilitas dalam mencapai potensi maksimal mereka
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {displayServices.map((service, index) => {
                                const IconComponent = iconMap[service.icon] || Heart;
                                return (
                                    <Card
                                        key={service.id}
                                        className={cn(
                                            "group flex flex-col transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700",
                                            `delay-[${index * 100}ms]`
                                        )}
                                    >
                                        <CardHeader>
                                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                <IconComponent className="h-8 w-8" />
                                            </div>
                                            <CardTitle className="text-xl">{service.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-1">
                                            <CardDescription className="text-sm leading-relaxed">
                                                {service.description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-t bg-muted/50 py-16">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="mb-4 text-3xl font-bold">Butuh Bantuan?</h2>
                            <p className="mb-8 text-muted-foreground">
                                Hubungi kami untuk informasi lebih lanjut tentang layanan yang tersedia atau untuk berkonsultasi dengan tim SE-DU
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" asChild>
                                    <Link href="/kontak">
                                        Hubungi Kami
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/tentang">Tentang SE-DU</Link>
                                </Button>
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
