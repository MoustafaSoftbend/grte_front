import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  // createRow,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMaterialReactTable,
  FullScreenButton,
} from "material-react-table";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { type User, fakeData, usStates } from "../utils/MakeData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { createTheme, ThemeProvider, useTheme } from "@mui/material";
import TableCell from "@mui/material/TableCell";

import { faExpand, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Example = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullScreen = () => {
    console.log("Custom button clicked!");
    setIsFullscreen(!isFullscreen);
    if (isFullScreen) {
      document.querySelector(".dash").style.zIndex = 3;
    } else {
      document.querySelector(".dash").style.zIndex = 0;
    }
  };
  const globalTheme = useTheme(); //(optional) if you already have a theme defined in your app root, you can import here

  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: globalTheme.palette.mode, //let's use the same dark/light mode as the global theme

          primary: globalTheme.palette.secondary, //swap in the secondary color as the primary for the table

          info: {
            main: "rgb(255,122,0)", //add in a custom color for the toolbar alert background stuff
          },

          background: {
            default:
              globalTheme.palette.mode === "dark"
                ? "rgb(254,255,244)" //random light yellow color for the background in light mode
                : "#2b3740", //pure black table in dark mode for fun
          },
          primary: {
            main: "#18ede5", // Change the primary color
          },
          secondary: {
            main: "rgb(247, 183, 65)", // Change the secondary color
          },
          // background: {
          //   default: "#121212", // Change the default background color
          //   paper: "#212121", // Change the paper background color
          // },
          text: {
            primary: "#ffffff", // Change the font color
            secondary: "#757575", // Change the secondary font color
          },
        },

        typography: {
          button: {
            textTransform: "none", //customize typography styles for all buttons in table by default
            fontSize: "1.2rem",
          },
        },

        components: {
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                fontSize: "1.1rem", //override to make tooltip font size larger
                "@media (max-width: 600px)": {
                  fontSize: "0.8rem",
                },
              },
            },
          },

          MuiPaper: {
            styleOverrides: {
              root: {
                width: "100%",
                "@media (max-width: 600px)": {
                  display: "block",
                },
              },
            },
          },

          MuiTable: {
            styleOverrides: {
              root: {
                zIndex: 1500, // Your custom z-index value
              },
            },
          },
          MuiTableBody: {
            styleOverrides: {
              root: {
                "@media (max-width:600px)": {
                  display: "block", // Make the table body a block element
                },
              },
            },
          },
          MuiBox: {
            styleOverrides: {
              root: {
                justifyContent: "flex-start",
              },
            },
          },
          MuiTableHead: {
            styleOverrides: {
              root: {
                width: "100%",
                "@media (max-width:600px)": {
                  display: "none",
                },
              },
            },
          },
          MuiTableRow: {
            styleOverrides: {
              root: {
                "&.MuiTableRow-root:nth-of-type(even)": {
                  backgroundColor: "#345160 !important",
                },
                display: "table-row", // Ensure the default display is 'table-row'
                "@media (max-width:600px)": {
                  display: "grid", // Change display to 'inline-flex' in the media query
                  width: "100%", // Make rows take full width in inline mode
                },
              },
            },
          },
          MuiTableCell: {
            styleOverrides: {
              root: {
                "@media (max-width:600px)": {
                  width: "100%", // Make rows take full width in inline mode
                  border: "none",
                },
              },
            },
          },
          MuiTableCellHead: {
            styleOverrides: {
              root: {
                "@media (max-width:600px)": {
                  display: "block", // Make each table header cell inline on small mobile screens
                  fontWeight: "bold", // Adjust header cell styling as needed
                  marginRight: "16px", // Adjust spacing between header cells as needed
                },
              },
            },
          },
          MuiMenu: {
            styleOverrides: {
              paper: {
                backgroundColor:
                  globalTheme.palette.mode === "dark"
                    ? "#333" // Set your dark background color for the menu
                    : "white", // Set your light background color for the menu
                color: globalTheme.palette.mode === "dark" ? "white" : "black", // Set text color
              },
            },
          },
          MuiSwitch: {
            styleOverrides: {
              thumb: {
                color: "#18ede5", //change the color of the switch thumb in the columns show/hide menu to pink
              },
            },
          },
        },
      }),

    [globalTheme],
  );

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        Cell: ({ value, row }) => {
          // console.log(row.original);
          return <TableCell data-key="Id">{row.original.id}</TableCell>;
        },
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "firstName",
        header: "First Name",
        Cell: ({ value, row }) => {
          // console.log("Cell row:", row);
          return (
            <TableCell data-key="First Name">
              {row.original.firstName}
            </TableCell>
          );
        },
        muiEditTextFieldProps: {
          type: "email",
          required: true,
          error: !!validationErrors?.firstName,
          helperText: validationErrors?.firstName,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              firstName: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        Cell: ({ value, row }) => {
          // console.log("Cell Value:", row);
          return (
            <TableCell data-key="Last Name">{row.original.lastName}</TableCell>
          );
        },
        muiEditTextFieldProps: {
          // type: "email",
          required: true,
          error: !!validationErrors?.lastName,
          helperText: validationErrors?.lastName,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              lastName: undefined,
            }),
        },
      },
      {
        accessorKey: "email",
        header: "Email",
        Cell: ({ value, row }) => {
          // console.log("Cell Value:", row);
          return <TableCell data-key="Email">{row.original.email}</TableCell>;
        },
        muiEditTextFieldProps: {
          // type: "email",
          required: true,
          error: !!validationErrors?.email,
          helperText: validationErrors?.email,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              email: undefined,
            }),
        },
      },
      {
        accessorKey: "state",
        header: "State",
        Cell: ({ value, row }) => {
          // console.log("Cell Value:", row);
          return <TableCell data-key="State">{row.original.state}</TableCell>;
        },
        editVariant: "select",
        editSelectOptions: usStates,
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors?.state,
          helperText: validationErrors?.state,
        },
      },
    ],
    [validationErrors],
  );

  //call CREATE hook
  const { mutateAsync: createUser, isPending: isCreatingUser } =
    useCreateUser();
  //call READ hook
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  //call UPDATE hook
  const { mutateAsync: updateUser, isPending: isUpdatingUser } =
    useUpdateUser();
  //call DELETE hook
  const { mutateAsync: deleteUser, isPending: isDeletingUser } =
    useDeleteUser();

  //CREATE action
  const handleCreateUser: MRT_TableOptions<User>["onCreatingRowSave"] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createUser(values);
    table.setCreatingRow(null); //exit creating mode
  };

  //UPDATE action
  const handleSaveUser: MRT_TableOptions<User>["onEditingRowSave"] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateUser(values);
    table.setEditingRow(null); //exit editing mode
  };

  //DELETE action
  const openDeleteConfirmModal = (row: MRT_Row<User>) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(row.original.id);
    }
  };
  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: "row", // ('modal', and 'custom' are also available)
    editDisplayMode: "row", // ('modal', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    enableFullScreenToggle: true,
    onFullScreenChange: (isFullScreen) => {
      if (isFullScreen) {
        document.querySelector(".dash .dash-main").style.zIndex = 3;
      } else {
        document.querySelector(".dash .dash-main").style.zIndex = 0;
      }
      console.log("Full screen", isFullScreen);
    },
    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: isLoadingUsersError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: "500px",
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <>
        <Button
          variant="contained"
          onClick={() => {
            table.setCreatingRow(true); //simplest way to open the create row modal with no default values
            //or you can pass in a row object to set default values with the `createRow` helper function
            // table.setCreatingRow(
            //   createRow(table, {
            //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
            //   }),
            // );
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>

        <IconButton
          onClick={() => handleFullScreen()}
          aria-label="Custom button"
        >
          <FontAwesomeIcon size="sm" icon={faExpand} />
        </IconButton>
      </>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  return (
    <ThemeProvider theme={tableTheme}>
      {isLoadingUsers ? (
        <p>Loading...</p>
      ) : (
        <MaterialReactTable table={table} />
      )}
    </ThemeProvider>
  );
};
//CREATE hook (post new user to api)
function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(
        ["users"],
        (prevUsers: any) =>
          [
            ...prevUsers,
            {
              ...newUserInfo,
              id: (Math.random() + 1).toString(36).substring(7),
            },
          ] as User[],
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//READ hook (get users from api)
function useGetUsers() {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      //send api request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve(fakeData);
    },
    refetchOnWindowFocus: false,
  });
}

//UPDATE hook (put user in api)
function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(
        ["users"],
        (prevUsers: any) =>
          prevUsers?.map((prevUser: User) =>
            prevUser.id === newUserInfo.id ? newUserInfo : prevUser,
          ),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//DELETE hook (delete user in api)
function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId: string) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (userId: string) => {
      queryClient.setQueryData(
        ["users"],
        (prevUsers: any) =>
          prevUsers?.filter((user: User) => user.id !== userId),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

const queryClient = new QueryClient();

const ExampleWithProviders = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

export default ExampleWithProviders;

const validateRequired = (value: string) => !!value.length;
const validateEmail = (email: string) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

function validateUser(user: User) {
  return {
    firstName: !validateRequired(user.firstName)
      ? "First Name is Required"
      : "",
    lastName: !validateRequired(user.lastName) ? "Last Name is Required" : "",
    email: !validateEmail(user.email) ? "Incorrect Email Format" : "",
  };
}
