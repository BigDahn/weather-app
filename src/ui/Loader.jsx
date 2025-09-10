function Loader() {
  return (
    <div className="flex gap-3 items-center py-3 px-3">
      <img src="/images/icon-loading.svg" />
      <h4 className="text-white font-DM_SANS text-[16px] font-medium">
        Search in progress
      </h4>
    </div>
  );
}

export default Loader;
