import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">ขออภัย ไม่พบหน้าที่คุณกำลังค้นหา</p>
        <Link href="/" className="text-blue-400 hover:underline">
          กลับหน้าแรก
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
