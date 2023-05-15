import { useRouter } from "next/router";

const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="button bg-white text-gray-700 font-semibold py-1 px-2 rounded-full shadow hover:bg-gray-100 focus:ring-1 ring-offset-2 ring-gray-300 outline-none active:bg-gray-200"
    >
      GoBack
    </button>
  );
};

export default GoBackButton;
