import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { SparklesCore } from '@/components/ui/sparkles';
import { Form, Head, Link } from '@inertiajs/react';
import { home } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Shield, LogIn } from 'lucide-react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    return (
        <>
            <Head title="Masuk - SE-DU" />

            <div className="relative flex min-h-screen">
                {/* Left Side - Login Form */}
                <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-20">
                    <div className="mx-auto w-full max-w-md">
                        {/* Logo & Title */}
                        <Link href={home()} className="mb-8 flex items-center gap-3">
                            <img
                                src="/assets/logo.png"
                                alt="SE-DU Logo"
                                className="h-24 w-24 object-contain"
                            />
                            <div>
                                <h1 className="text-xl font-bold leading-tight">SE-DU</h1>
                                <p className="text-xs text-muted-foreground">Sentral Disabilitas Ubudiyah</p>
                            </div>
                        </Link>

                        <div className="mb-8">
                            <div className="mb-2 flex items-center gap-2">
                                <Shield className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold">Selamat Datang Kembali</h2>
                            </div>
                            <p className="text-muted-foreground">
                                Masuk ke akun Anda untuk mengakses dashboard SE-DU
                            </p>
                        </div>

                        {status && (
                            <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
                                {status}
                            </div>
                        )}

                        <Form
                            {...store.form()}
                            resetOnSuccess={['password']}
                            className="space-y-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium">
                                                Alamat Email
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="email"
                                                placeholder="nama@example.com"
                                                className="h-11"
                                            />
                                            <InputError message={errors.email} />
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="password" className="text-sm font-medium">
                                                    Kata Sandi
                                                </Label>
                                                {canResetPassword && (
                                                    <TextLink
                                                        href={request()}
                                                        className="text-sm text-primary hover:text-primary/80"
                                                        tabIndex={5}
                                                    >
                                                        Lupa kata sandi?
                                                    </TextLink>
                                                )}
                                            </div>
                                            <Input
                                                id="password"
                                                type="password"
                                                name="password"
                                                required
                                                tabIndex={2}
                                                autoComplete="current-password"
                                                placeholder="Masukkan kata sandi"
                                                className="h-11"
                                            />
                                            <InputError message={errors.password} />
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="remember"
                                                name="remember"
                                                tabIndex={3}
                                            />
                                            <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                                                Ingat saya
                                            </Label>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-11 text-base font-medium"
                                        tabIndex={4}
                                        disabled={processing}
                                        data-test="login-button"
                                    >
                                        {processing ? (
                                            <>
                                                <Spinner />
                                                Memproses...
                                            </>
                                        ) : (
                                            <>
                                                <LogIn className="mr-2 h-5 w-5" />
                                                Masuk
                                            </>
                                        )}
                                    </Button>

                                    <div className="text-center">
                                        <p className="text-sm text-muted-foreground">
                                            Untuk akses dashboard, hubungi administrator SE-DU
                                        </p>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>

                {/* Right Side - Decorative */}
                <div className="relative hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-secondary to-accent">
                    {/* Sparkles Effect */}
                    <div className="absolute inset-0">
                        <SparklesCore
                            id="login-sparkles"
                            background="transparent"
                            minSize={0.4}
                            maxSize={1.2}
                            particleDensity={80}
                            className="h-full w-full"
                            particleColor="#ffffff"
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 flex flex-col justify-center px-16 text-white">
                        <div className="mb-8 space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                                <Shield className="h-4 w-4" />
                                <span className="text-sm font-medium">Admin Portal</span>
                            </div>
                            <h2 className="text-4xl font-bold leading-tight">
                                Kelola Platform<br />
                                SE-DU dengan Mudah
                            </h2>
                            <p className="text-lg text-white/90">
                                Dashboard administrasi untuk mengelola konten, layanan, dan informasi
                                Unit Layanan Disabilitas Universitas Ubudiyah Indonesia.
                            </p>
                        </div>

                        <div className="space-y-4 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                            <h3 className="font-semibold">Fitur Dashboard:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                                        <span className="text-xs">✓</span>
                                    </div>
                                    <span className="text-sm">Kelola artikel dan berita</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                                        <span className="text-xs">✓</span>
                                    </div>
                                    <span className="text-sm">Upload galeri foto kegiatan</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                                        <span className="text-xs">✓</span>
                                    </div>
                                    <span className="text-sm">Kelola layanan dan informasi</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                </div>
            </div>
        </>
    );
}
