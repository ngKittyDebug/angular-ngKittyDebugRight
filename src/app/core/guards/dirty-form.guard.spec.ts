describe('dirtyFormGuard', () => {
  // it('должен пропустить навигацию, если форма pristine', () => {
  //   const componentMock = { isDirty: () => false };
  //
  //   expect(dirtyFormGuard(componentMock as any, {} as any, {} as any)).toBe(true);
  // });
  //
  // it('должен показать confirm и разрешить навигацию при подтверждении', () => {
  //   const componentMock = { isDirty: () => true };
  //   const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true);
  //
  //   expect(dirtyFormGuard(componentMock as any, {} as any, {} as any)).toBe(true);
  //   expect(confirmSpy).toHaveBeenNthCalledWith(1, 'У вас есть несохранённые изменения. Покинуть страницу?');
  //
  //   confirmSpy.mockRestore();
  // });
  //
  // it('должен показать confirm и запретить навигацию при отмене', () => {
  //   const componentMock = { isDirty: () => true };
  //   const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);
  //
  //   expect(dirtyFormGuard(componentMock as any, {} as any, {} as any)).toBe(false);
  //   expect(confirmSpy).toHaveBeenNthCalledWith(1, 'У вас есть несохранённые изменения. Покинуть страницу?');
  //
  //   confirmSpy.mockRestore();
  // });
});
