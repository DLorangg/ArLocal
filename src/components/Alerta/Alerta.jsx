export function Alerta({message}) {
    return <div className="text-red-700 px-4 py-3 rounded relative mb-2 text-right ">
        <span className="sm:inline-block">{message}</span>
    </div>;
}   