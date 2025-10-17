import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Heart,
    Target,
    Eye,
    Rocket,
    CheckCircle2,
    Users,
    Accessibility,
    BookOpen,
    GraduationCap
} from 'lucide-react';
import { login, register } from '@/routes';

export default function About() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Tentang SE-DU - Sentral Disabilitas Ubudiyah" />

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
                            <Link href="/tentang" className="text-sm font-medium text-primary">
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
                                <>
                                    <Button asChild variant="ghost" size="sm">
                                        <Link href={login()}>Masuk</Link>
                                    </Button>
                                    <Button asChild size="sm">
                                        <Link href={register()}>Daftar</Link>
                                    </Button>
                                </>
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
                                Tentang SE-DU
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Unit Layanan Disabilitas Universitas Ubudiyah Indonesia
                            </p>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-12 text-center">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    <strong className="text-foreground">SE-DU (Sentral Disabilitas Ubudiyah)</strong> adalah
                                    platform digital Unit Layanan Disabilitas di Universitas Ubudiyah Indonesia yang dirancang
                                    untuk mewujudkan kampus inklusif dan aksesibel bagi seluruh mahasiswa penyandang disabilitas.
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-3">
                                <Card className="text-center">
                                    <CardContent className="pt-6">
                                        <div className="mb-4 flex justify-center">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                                <Eye className="h-8 w-8 text-primary" />
                                            </div>
                                        </div>
                                        <h3 className="mb-2 text-lg font-semibold">Visi</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Menjadi pusat layanan disabilitas yang inklusif, aksesibel, dan berkeadilan
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="text-center">
                                    <CardContent className="pt-6">
                                        <div className="mb-4 flex justify-center">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                                <Target className="h-8 w-8 text-primary" />
                                            </div>
                                        </div>
                                        <h3 className="mb-2 text-lg font-semibold">Misi</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Menyediakan layanan pendampingan dan aksesibilitas kampus
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="text-center">
                                    <CardContent className="pt-6">
                                        <div className="mb-4 flex justify-center">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                                <Rocket className="h-8 w-8 text-primary" />
                                            </div>
                                        </div>
                                        <h3 className="mb-2 text-lg font-semibold">Tujuan</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Memberikan dukungan akademik dan non-akademik yang setara
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Misi Section */}
                <section className="bg-muted/50 py-16">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="mb-8 text-center text-3xl font-bold">Misi Kami</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <MissionItem
                                    number="01"
                                    title="Layanan Pendampingan"
                                    description="Menyediakan layanan pendampingan akademik dan non-akademik bagi mahasiswa penyandang disabilitas"
                                />
                                <MissionItem
                                    number="02"
                                    title="Aksesibilitas Kampus"
                                    description="Mengembangkan sarana dan prasarana kampus yang aksesibel sesuai kebutuhan mahasiswa disabilitas"
                                />
                                <MissionItem
                                    number="03"
                                    title="Kesadaran Inklusif"
                                    description="Meningkatkan kesadaran dan kapasitas sivitas akademika dalam mewujudkan kampus inklusif"
                                />
                                <MissionItem
                                    number="04"
                                    title="Jejaring Kolaborasi"
                                    description="Membangun jejaring dan kerja sama dengan lembaga terkait untuk penguatan layanan disabilitas"
                                />
                                <MissionItem
                                    number="05"
                                    title="Pengembangan Potensi"
                                    description="Memberikan ruang pengembangan potensi, minat, dan bakat mahasiswa disabilitas"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tujuan Section */}
                <section className="py-16">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="mb-8 text-center text-3xl font-bold">Tujuan SE-DU</h2>
                            <div className="space-y-4">
                                <GoalItem text="Memberikan dukungan akademik dan non-akademik yang setara bagi mahasiswa penyandang disabilitas" />
                                <GoalItem text="Menciptakan lingkungan kampus yang ramah, inklusif, dan bebas dari diskriminasi" />
                                <GoalItem text="Menyediakan akses sarana, prasarana, serta layanan teknologi yang mendukung kebutuhan mahasiswa disabilitas" />
                                <GoalItem text="Meningkatkan pemahaman, kepedulian, dan sikap inklusif sivitas akademika" />
                                <GoalItem text="Memastikan terpenuhinya hak pendidikan sesuai peraturan perundang-undangan" />
                                <GoalItem text="Menjadi pusat rujukan dan koordinasi dalam pengembangan layanan disabilitas" />
                                <GoalItem text="Mengembangkan potensi, minat, dan bakat mahasiswa penyandang disabilitas" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="bg-muted/50 py-16">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="mb-8 text-center text-3xl font-bold">Nilai-Nilai Utama</h2>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                <ValueCard
                                    icon={<Users className="h-6 w-6" />}
                                    title="Inklusifitas"
                                    description="Menerima dan menghargai setiap perbedaan"
                                />
                                <ValueCard
                                    icon={<Accessibility className="h-6 w-6" />}
                                    title="Aksesibilitas"
                                    description="Memastikan setiap mahasiswa dapat mengakses fasilitas dan layanan kampus"
                                />
                                <ValueCard
                                    icon={<Heart className="h-6 w-6" />}
                                    title="Empati"
                                    description="Memahami kebutuhan mahasiswa disabilitas secara manusiawi dan berkeadilan"
                                />
                                <ValueCard
                                    icon={<BookOpen className="h-6 w-6" />}
                                    title="Kolaborasi"
                                    description="Bekerja sama dengan berbagai pihak untuk memperkuat layanan"
                                />
                                <ValueCard
                                    icon={<GraduationCap className="h-6 w-6" />}
                                    title="Kemandirian"
                                    description="Mendorong mahasiswa disabilitas untuk berkembang dan berdaya"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dasar Hukum Section */}
                <section className="py-16">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="mb-8 text-center text-3xl font-bold">Dasar Hukum</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <Card>
                                    <CardContent className="pt-6">
                                        <h3 className="mb-2 font-semibold">UU No. 8 Tahun 2016</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Tentang Penyandang Disabilitas
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="pt-6">
                                        <h3 className="mb-2 font-semibold">Permendikbud No. 46 Tahun 2017</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Tentang Pendidikan Khusus dan Layanan Khusus
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-t bg-muted/50 py-16">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="mb-4 text-3xl font-bold">Bergabung dengan SE-DU</h2>
                            <p className="mb-8 text-muted-foreground">
                                Kami siap membantu Anda dalam perjalanan pendidikan di Universitas Ubudiyah Indonesia
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" asChild>
                                    <Link href="/kontak">Hubungi Kami</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/layanan">Lihat Layanan</Link>
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

function MissionItem({ number, title, description }: { number: string; title: string; description: string }) {
    return (
        <Card className="group transition-all hover:shadow-md">
            <CardContent className="pt-6">
                <div className="mb-3 text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {number}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}

function GoalItem({ text }: { text: string }) {
    return (
        <div className="flex gap-3 rounded-lg border bg-card p-4 transition-colors hover:border-primary/50">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <p className="text-sm leading-relaxed">{text}</p>
        </div>
    );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <Card className="group text-center transition-all hover:shadow-md">
            <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        {icon}
                    </div>
                </div>
                <h3 className="mb-2 font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
