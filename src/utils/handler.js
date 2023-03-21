export async function handle(state, action) {
  const { username, content } = action.input;
  state.users.push({ username, content });
  return { state };
}
