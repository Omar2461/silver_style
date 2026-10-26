using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Silver_Style.Migrations
{
    /// <inheritdoc />
    public partial class editTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "clientId",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Orders_clientId",
                table: "Orders",
                column: "clientId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Clients_clientId",
                table: "Orders",
                column: "clientId",
                principalTable: "Clients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Clients_clientId",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_clientId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "clientId",
                table: "Orders");
        }
    }
}
