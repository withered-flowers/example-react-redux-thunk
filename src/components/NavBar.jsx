import CustomLink from "./CustomLink";

export default () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-center">
        <section>
          <p className="text-3xl">Example React Redux (Legacy) Thunk</p>
        </section>
        <section className="flex gap-2">
          <CustomLink to="/">Counter</CustomLink>
          <CustomLink to="/table">DataTable</CustomLink>
        </section>
      </nav>
    </>
  );
};
