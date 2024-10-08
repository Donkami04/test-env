export const ErrorOverlay = ({ message, onClose }) => {
  return (
    <div className="h-heighWithOutNav mt-20 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="h-heighWithOutNav mt-18 grid place-content-center w-screen bg-radial-custom rounded-lg p-6 shadow-lg text-center">
        <h2 className="text-xl font-bold text-red-600 mb-4">Error</h2>
        <p className="text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
