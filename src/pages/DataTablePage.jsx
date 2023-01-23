import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchColor } from "../actions/actionCreator";

const DataTablePage = () => {
  const { error, isLoading, colors } = useSelector((state) => state.color);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchColor());
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1 className="text-3xl font-semibold animate-pulse text-blue-400">
          "Loading ..."
        </h1>
      ) : (
        <>
          {error !== "" ? (
            <h1>Error: {error}</h1>
          ) : (
            <section className="bg-gray-100 flex flex-col gap-4 p-4">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Pantone Value</th>
                    <th>Color</th>
                  </tr>
                </thead>
                <tbody>
                  {colors.map((color) => (
                    <tr key={color.id}>
                      <td>{color.id}</td>
                      <td>{color.name}</td>
                      <td>{color.year}</td>
                      <td>{color.pantone_value}</td>
                      <td>
                        <section className="flex gap-4 items-center justify-center font-mono">
                          <div
                            className="p-1 w-4 h-4"
                            style={{ backgroundColor: color.color }}
                          >
                            &nbsp;
                          </div>
                          <p>{color.color}</p>
                        </section>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default DataTablePage;
