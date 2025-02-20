const SizeTableTemplate = () => {
  return (
    <div className="flex max-w-6xl flex-col items-center py-20 md:mx-auto md:flex-row md:items-start md:py-40">
      <h1 className="mb-8 w-1/3 text-center font-gilroy text-3xl font-medium text-[#8B0000]">
        Таблица размеров
      </h1>
      <div className="max-w-2xl space-y-6 py-10 font-gilroy text-gray-800 md:w-2/3">
        <div className="mx-auto w-full max-w-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-[#800000] p-3 font-medium text-[#800000]"></th>
                <th className="border border-[#800000] p-3 text-center font-medium text-[#800000]">
                  XS
                </th>
                <th className="border border-[#800000] p-3 text-center font-medium text-[#800000]">
                  S
                </th>
                <th className="border border-[#800000] p-3 text-center font-medium text-[#800000]">
                  M
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#800000] p-3 font-medium text-[#800000]">
                  Обхват груди
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  78-82
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  82-86
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  86-92
                </td>
              </tr>
              <tr>
                <td className="border border-[#800000] p-3 font-medium text-[#800000]">
                  Обхват талии
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  58-62
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  62-66
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  66-70
                </td>
              </tr>
              <tr>
                <td className="border border-[#800000] p-3 font-medium text-[#800000]">
                  Обхват бедер
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  84-90
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  90-96
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  96-102
                </td>
              </tr>
              <tr>
                <td className="border border-[#800000] p-3 font-medium text-[#800000]">
                  Рост
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  158-166
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  166-174
                </td>
                <td className="border border-[#800000] p-3 text-center text-[#800000]">
                  174-180
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SizeTableTemplate
