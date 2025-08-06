import Header from '@/components/public/web/features/base/header';
import Footer from '@/components/public/web/features/base/footer';
import Container from '@/components/public/web/ui/Container';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-3xl font-semibold text-gray-800">404 - Page Not Found</h1>
            <p className="mt-4 text-base text-gray-600">
              Sorry, the page you’re looking for doesn’t exist.
            </p>
          </div>
        </Container>
      </main>

      <Footer /> {/* ✅ Just reuse your existing footer here */}
    </div>
  );
}
